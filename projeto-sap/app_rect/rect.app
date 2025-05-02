import { useState } from 'react';
import { Upload, Table, BarChart } from 'lucide-react';
import Papa from 'papaparse';

export default function SistemaRelatorioMateriais() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [escolas, setEscolas] = useState([]);
  const [escolaSelecionada, setEscolaSelecionada] = useState('todas');
  const [resumoMateriais, setResumoMateriais] = useState({});
  const [resumoAdequacao, setResumoAdequacao] = useState({});
  const [statusViabilizacao, setStatusViabilizacao] = useState({});
  const [visualizacao, setVisualizacao] = useState('tabela');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setError(null);
      
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.data && results.data.length > 0) {
            // Adicionar um ID único para cada linha
            const dadosComId = results.data.map((row, index) => ({
              id: index,
              ...row
            }));
            
            setData(dadosComId);
            
            // Extrair lista de escolas únicas (assumindo que há uma coluna "ESCOLA" ou similar)
            // Adaptando para encontrar a coluna que contém "ESCOLA" no nome
            const colunaEscola = results.meta.fields.find(field => 
              field.includes("ESCOLA") || field.includes("escola") || field.includes("Escola")
            ) || "ID";
            
            const escolasUnicas = [...new Set(dadosComId.map(row => row[colunaEscola] || row.id))];
            setEscolas(escolasUnicas);
            
            processarDados(dadosComId, escolasUnicas);
          } else {
            setError("A planilha não contém dados ou está em formato incorreto.");
          }
          setLoading(false);
        },
        error: (error) => {
          setError(`Erro ao processar o arquivo: ${error.message}`);
          setLoading(false);
        }
      });
    }
  };
  
  const processarDados = (dados, escolasLista = []) => {
    // Processar adequação de locais
    const adequacao = {
      rackAdequado: dados.filter(row => row["LOCAL VIABILIZADO PARA O RACK É ADEQUADO?"] === "SIM").length,
      energiaDisponivel: dados.filter(row => row["LOCAL TEM DISPONIBILIDADE ELETRICA PARA LIGAR OS APARELHOS?"] === "SIM").length,
      infraestruturaAdequada: dados.filter(row => row["O LOCAL POSSUI INFRAESTRUTURA ADEQUADA PARA PASSAGEM DO CABEAMENTO (ELETRODUTOS / CANALETAS)?"] === "SIM").length,
      semObstaculos: dados.filter(row => row["O LOCAL POSSUI OBSTÁCULOS FÍSICOS QUE POSSAM INTERFERIR NO SINAL?"] === "NÃO").length,
      apAdequado: dados.filter(row => row["O LOCAL ESTIMADO PARA IMPLANTAÇÃO DO AP É ADEQUADO?"] === "SIM").length,
      facilManutencao: dados.filter(row => row["O PONTO DE ACESSO FICARÁ INSTALADO EM UM LOCAL DE FÁCIL ACESSO PARA FUTURAS MANUTENÇÕES?"] === "SIM").length,
      alturaAdequada: dados.filter(row => row["O PONTO DE INSTALAÇÃO OFERECE ALTURA SUFICIENTE PARA MAXIMIZAR A PROPAGAÇÃO DO SINAL?"] === "SIM").length,
      condicoesAmbientais: dados.filter(row => row["O LOCAL POSSUI VENTILAÇÃO E NÃO APRESENTA CONDIÇÕES DE UMIDADE EXCESSIVA, CALOR INTENSO OU POEIRA?"] === "SIM").length,
      total: dados.length
    };
    
    setResumoAdequacao(adequacao);
    
    // Calcular status geral de viabilização para cada escola
    const status = {};
    escolasLista.forEach(escola => {
      const escolaDados = dados.filter(row => row.ESCOLA === escola || row.id === escola);
      
      if (escolaDados.length > 0) {
        const viavel = escolaDados.every(row => 
          row["LOCAL VIABILIZADO PARA O RACK É ADEQUADO?"] === "SIM" &&
          row["LOCAL TEM DISPONIBILIDADE ELETRICA PARA LIGAR OS APARELHOS?"] === "SIM" &&
          row["O LOCAL POSSUI INFRAESTRUTURA ADEQUADA PARA PASSAGEM DO CABEAMENTO (ELETRODUTOS / CANALETAS)?"] === "SIM"
        );
        
        status[escola] = viavel ? "Viabilizado" : "Pendente";
      }
    });
    
    setStatusViabilizacao(status);
    
    // Processar quantidades de materiais
    const materiais = {};
    
    // Colunas numéricas de materiais
    const colunasMateriais = [
      "QUANTIDADE DE APS NESCESSARIAS",
      "METRAGEM DE CABO NESCESSARIA PARA LIGAÇÃO DOS APS",
      "METRAGEM PARA PASSASEM DE CABO(ELETRODUTO, CONDULETE, ETC)",
      "QUANTIDADE DE CURVAS",
      "QUANTIDADE DE CAIXINHAS PARA INTERLIGAÇÃO",
      "QUANTIDADE DE LUVAS",
      "QUANTIDADE DE RACKS",
      "QUANTIDADE DE ABRAÇADEIRAS CONDULETES",
      "QUANTIDADE DE CONECTORES DAS CAIXAS DE PASSAGEM",
      "PARAFUSO E BUCHAS 6MM",
      "QTD SIMET BOX",
      "QTD FIREWALL",
      "QTD INJETOR POE",
      "QTD SW 24P",
      "QTD SW 8P",
      "QTD CANDULETES",
      "QTD DE PARAFUSOS E BUXAS RACK",
      "MTG DE CABO DE REDE",
      "MTG CABO PP",
      "QTD PLUG MACHO",
      "QTD PLUG FEMEA",
      "QNT DE PARAFUSOS/PORCA GAIOLA",
      "QTD PATCH PANEL",
      "ORGANIZADOR HORIZONTAL",
      "BANDEJA",
      "QTD PATCH CORD",
      "METRAGEM DE CABO PARA INTERLIGAÇÃO DE CADA RACK",
      "QUANTIDADE DE RACKS ADICIONAIS"
    ];
    
    // Somar todos os materiais
    colunasMateriais.forEach(coluna => {
      materiais[coluna] = dados.reduce((sum, row) => {
        const valor = parseFloat(row[coluna]) || 0;
        return sum + valor;
      }, 0);
    });
    
    setResumoMateriais(materiais);
  };
  
  const filtrarDadosPorEscola = () => {
    if (escolaSelecionada === 'todas') {
      return data;
    }
    return data.filter(row => row.ESCOLA === escolaSelecionada || row.id === escolaSelecionada);
  };
  
  const gerarRelatorio = () => {
    const dadosFiltrados = filtrarDadosPorEscola();
    const nomeEscola = escolaSelecionada === 'todas' ? 'Todas as Escolas' : escolaSelecionada;
    
    let conteudoRelatorio = `Relatório de Materiais - ${nomeEscola}\n\n`;
    conteudoRelatorio += `Data do relatório: ${new Date().toLocaleDateString()}\n\n`;
    
    conteudoRelatorio += "RESUMO DE MATERIAIS NECESSÁRIOS:\n";
    Object.entries(resumoMateriais).forEach(([material, quantidade]) => {
      if (quantidade > 0) {
        conteudoRelatorio += `${material}: ${quantidade}\n`;
      }
    });
    
    conteudoRelatorio += "\nSTATUS DE VIABILIZAÇÃO:\n";
    if (escolaSelecionada === 'todas') {
      Object.entries(statusViabilizacao).forEach(([escola, status]) => {
        conteudoRelatorio += `${escola}: ${status}\n`;
      });
    } else {
      conteudoRelatorio += `${escolaSelecionada}: ${statusViabilizacao[escolaSelecionada] || 'Não avaliado'}\n`;
    }
    
    // Criar blob e link para download
    const blob = new Blob([conteudoRelatorio], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-materiais-${nomeEscola.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Sistema de Relatório de Materiais para Escolas</h1>
      </header>
      
      <main className="flex-1 p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload da Planilha</h2>
          <div className="flex items-center space-x-4">
            <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">
              <Upload className="mr-2 h-5 w-5" />
              Selecionar Arquivo
              <input 
                type="file" 
                accept=".csv,.xlsx,.xls" 
                onChange={handleFileUpload} 
                className="hidden" 
              />
            </label>
            {loading && <span className="text-gray-500">Processando arquivo...</span>}
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
        </div>
        
        {data.length > 0 && (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Filtros e Visualização</h2>
              <div className="flex flex-wrap gap-4">
                <div className="w-full md:w-64">
                  <label className="block text-gray-700 mb-2">Escola</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={escolaSelecionada}
                    onChange={(e) => setEscolaSelecionada(e.target.value)}
                  >
                    <option value="todas">Todas as Escolas</option>
                    {escolas.map((escola) => (
                      <option key={escola} value={escola}>
                        {escola}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="w-full md:w-64">
                  <label className="block text-gray-700 mb-2">Visualização</label>
                  <div className="flex space-x-2">
                    <button 
                      className={`flex items-center px-3 py-2 rounded-md ${visualizacao === 'tabela' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      onClick={() => setVisualizacao('tabela')}
                    >
                      <Table className="mr-1 h-4 w-4" />
                      Tabela
                    </button>
                    <button 
                      className={`flex items-center px-3 py-2 rounded-md ${visualizacao === 'grafico' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      onClick={() => setVisualizacao('grafico')}
                    >
                      <BarChart className="mr-1 h-4 w-4" />
                      Gráfico
                    </button>
                  </div>
                </div>
                
                <div className="flex items-end">
                  <button 
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    onClick={gerarRelatorio}
                  >
                    Gerar Relatório
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Resumo de Materiais</h2>
              
              {visualizacao === 'tabela' ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">Material</th>
                        <th className="border p-2 text-left">Quantidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(resumoMateriais).map(([material, quantidade]) => (
                        quantidade > 0 && (
                          <tr key={material} className="hover:bg-gray-50">
                            <td className="border p-2">{material}</td>
                            <td className="border p-2">{quantidade}</td>
                          </tr>
                        )
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="h-64 flex justify-center items-center">
                  <div className="text-center">
                    <BarChart className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-gray-500">Gráfico de materiais</p>
                    <p className="text-sm text-gray-400">(Os dados seriam visualizados em um gráfico aqui)</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Status de Viabilização</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-800">Rack Adequado</h3>
                  <p className="text-2xl mt-2">
                    {resumoAdequacao.rackAdequado || 0}/{resumoAdequacao.total || 0}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${resumoAdequacao.total ? (resumoAdequacao.rackAdequado / resumoAdequacao.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-md">
                  <h3 className="font-medium text-green-800">Energia Disponível</h3>
                  <p className="text-2xl mt-2">
                    {resumoAdequacao.energiaDisponivel || 0}/{resumoAdequacao.total || 0}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${resumoAdequacao.total ? (resumoAdequacao.energiaDisponivel / resumoAdequacao.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-md">
                  <h3 className="font-medium text-purple-800">Infraestrutura Adequada</h3>
                  <p className="text-2xl mt-2">
                    {resumoAdequacao.infraestruturaAdequada || 0}/{resumoAdequacao.total || 0}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${resumoAdequacao.total ? (resumoAdequacao.infraestruturaAdequada / resumoAdequacao.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-md">
                  <h3 className="font-medium text-yellow-800">AP Adequado</h3>
                  <p className="text-2xl mt-2">
                    {resumoAdequacao.apAdequado || 0}/{resumoAdequacao.total || 0}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-yellow-600 h-2.5 rounded-full" 
                      style={{ width: `${resumoAdequacao.total ? (resumoAdequacao.apAdequado / resumoAdequacao.total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Status por Escola</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">Escola</th>
                        <th className="border p-2 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(statusViabilizacao).map(([escola, status]) => (
                        <tr key={escola} className="hover:bg-gray-50">
                          <td className="border p-2">{escola}</td>
                          <td className="border p-2">
                            <span 
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                status === 'Viabilizado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <footer className="bg-gray-100 p-4 text-center text-gray-600">
        <p>Sistema de Relatório de Materiais para Escolas - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
