const cidadesPorEstado = {
    'CE': [
	    { sigla: 'AQZ', nome: 'Aquiraz' },
	    { sigla: 'BBB', nome: 'Beberibe' },
	    { sigla: 'CVL', nome: 'Cascavel' },
	    { sigla: 'CUC', nome: 'Caucaia' },
	    { sigla: 'CZH', nome: 'Chorozinho' },
	    { sigla: 'ESB', nome: 'Eusebio' },
	    { sigla: 'FLA', nome: 'Fortaleza' },
	    { sigla: 'GBA', nome: 'Guaiuba' },
	    { sigla: 'HZT', nome: 'Horizonte' },
	    { sigla: 'IAGA', nome: 'Itaitinga' },
	    { sigla: 'MCW', nome: 'Maracanaú' },
	    { sigla: 'MUE', nome: 'Maranguape' },
	    { sigla: 'PJS', nome: 'Pacajus' },
	    { sigla: 'PUB', nome: 'Pacatuba' },
	    { sigla: 'PDJ', nome: 'Pindoretama' },
	    { sigla: 'SGA', nome: 'São Gonçalo do Amarante' },
	    { sigla: 'ACP', nome: 'Acarape' },
	    { sigla: 'AUS', nome: 'Apuiarés' },
	    { sigla: 'AAB', nome: 'Acaroia' },
	    { sigla: 'ATU', nome: 'Aratuba' },
	    { sigla: 'BRK', nome: 'Barreira' },
	    { sigla: 'BTT', nome: 'Baturité' },
	    { sigla: 'CIE', nome: 'Canindé' },
	    { sigla: 'CSR', nome: 'Capistrano' },
	    { sigla: 'CID', nome: 'Caridade' },
	    { sigla: 'GNL', nome: 'General Sampaio' },
	    { sigla: 'GAG', nome: 'Guaramiranga' },
	    { sigla: 'MUN', nome: 'Mulungu' },
	    { sigla: 'OCR', nome: 'Ocara' },
	    { sigla: 'PTY', nome: 'Pacoti' },
	    { sigla: 'PMC', nome: 'Palmácia' },
	    { sigla: 'POY', nome: 'Paramoti' },
	    { sigla: 'RDC', nome: 'Redenção' },
	    { sigla: 'IGE', nome: 'Itapagé' },
	    { sigla: 'PUU', nome: 'Paracuru' },
	    { sigla: 'PWB', nome: 'Paraipaba' },
	    { sigla: 'POE', nome: 'Pentecoste' },
	    { sigla: 'SRU', nome: 'São Luís do Curu' },
	    { sigla: 'TJU', nome: 'Tejuçuoca' },
	    { sigla: 'TRY', nome: 'Trairi' },
	    { sigla: 'TUK', nome: 'Tururu' },
	    { sigla: 'URM', nome: 'Umirim' },
	    { sigla: 'UUA', nome: 'Uruburetama' },
	    { sigla: 'ATO', nome: 'Alto Santo' },
	    { sigla: 'ACA', nome: 'Aracati' },
	    { sigla: 'FORT', nome: 'Fortim' },
	    { sigla: 'ICN', nome: 'Ibicuitinga' },
	    { sigla: 'ICP', nome: 'Icapuí' },
	    { sigla: 'ICA', nome: 'Iracema' },
	    { sigla: 'IAX', nome: 'Itaicaba' },
	    { sigla: 'JGN', nome: 'Jaguaruana' },
	    { sigla: 'LNT', nome: 'Limoeiro do Norte' },
	    { sigla: 'MVA', nome: 'Morada Nova' },
	    { sigla: 'PHN', nome: 'Palhano' },
	    { sigla: 'PTZ', nome: 'Potiretama' },
	    { sigla: 'QXE', nome: 'Quixeré' },
	    { sigla: 'RUS', nome: 'Russas' },
	    { sigla: 'SUB', nome: 'São João do Jaguaribe' },
	    { sigla: 'TNT', nome: 'Tabuleiro do Norte' },
	    { sigla: 'ABY', nome: 'Abaiara' },
	    { sigla: 'AUR', nome: 'Aurora' },
	    { sigla: 'BBH', nome: 'Barbalha' },
	    { sigla: 'BAO', nome: 'Barro' },
	    { sigla: 'BJS', nome: 'Brejo Santo' },
	    { sigla: 'CAC', nome: 'Caririaçu' },
	    { sigla: 'CTO', nome: 'Crato' },
	    { sigla: 'GJO', nome: 'Granjeiro' },
	    { sigla: 'JDM', nome: 'Jardim' },
	    { sigla: 'JAT', nome: 'Jati' },
	    { sigla: 'JNE', nome: 'Juazeiro do Norte' },
	    { sigla: 'MRT', nome: 'Mauriti' },
	    { sigla: 'MGS', nome: 'Milagres' },
	    { sigla: 'MAH', nome: 'Missão Velha' },
	    { sigla: 'PFT', nome: 'Penaforte' },
	    { sigla: 'PTX', nome: 'Porteiras' },
	    { sigla: 'VZG', nome: 'Várzea Alegre' },
	    { sigla: 'AIB', nome: 'Aiuaba' },
	    { sigla: 'ANY', nome: 'Altaneira' },
	    { sigla: 'ANE', nome: 'Antonina do Norte' },
	    { sigla: 'ARP', nome: 'Araripe' },
	    { sigla: 'ASE', nome: 'Assaré' },
	    { sigla: 'CMS', nome: 'Campos Sales' },
	    { sigla: 'FBO', nome: 'Farias Brito' },
	    { sigla: 'NID', nome: 'Nova Olinda' },
	    { sigla: 'PGY', nome: 'Potengi' },
	    { sigla: 'SIQ', nome: 'Salitre' },
	    { sigla: 'SCI', nome: 'Santana do Cariri' },
	    { sigla: 'TRR', nome: 'Tarrafas' },
	    { sigla: 'ACX', nome: 'Alcântaras' },
	    { sigla: 'AOW', nome: 'Amontada' },
	    { sigla: 'CIW', nome: 'Carire' },
	    { sigla: 'CATN', nome: 'Catunda' },
	    { sigla: 'CEA', nome: 'Coreau' },
	    { sigla: 'FRQ', nome: 'Forquilha' },
	    { sigla: 'GRO', nome: 'Groairas' },
	    { sigla: 'HDA', nome: 'Hidrolândia' },
	    { sigla: 'ICB', nome: 'Irauçuba' },
	    { sigla: 'IOP', nome: 'Itapipoca' },
	    { sigla: 'MSS', nome: 'Massapê' },
	    { sigla: 'MEU', nome: 'Meruoca' },
	    { sigla: 'MIK', nome: 'Miraíma' },
	    { sigla: 'MUJ', nome: 'Moraújo' },
	    { sigla: 'RRB', nome: 'Reriutaba' },
	    { sigla: 'SNQ', nome: 'Santa Quitéria' },
	    { sigla: 'SAU', nome: 'Santana do Acaraú' },
	    { sigla: 'SOL', nome: 'Sobral' },
	    { sigla: 'VJT', nome: 'Varjota' },
	    { sigla: 'CUB', nome: 'Carnaubal' },
	    { sigla: 'COZ', nome: 'Croatá' },
	    { sigla: 'FHH', nome: 'Frecheirinha' },
	    { sigla: 'GCA', nome: 'Graça' },
	    { sigla: 'GRN', nome: 'Guaraciaba do Norte' },
	    { sigla: 'INX', nome: 'Ibiapina' },
	    { sigla: 'MUM', nome: 'Mucambo' },
	    { sigla: 'PUJ', nome: 'Pacujá' },
	    { sigla: 'SBN', nome: 'São Benedito' },
	    { sigla: 'TIG', nome: 'Tianguá' },
	    { sigla: 'UBJ', nome: 'Ubajara' },
	    { sigla: 'VCC', nome: 'Viçosa do Ceará' },
	    { sigla: 'AAU', nome: 'Acaraú' },
	    { sigla: 'BQN', nome: 'Barroquinha' },
	    { sigla: 'BCZ', nome: 'Bela Cruz' },
	    { sigla: 'CCM', nome: 'Camocim' },
	    { sigla: 'CHA', nome: 'Chaval' },
	    { sigla: 'CZW', nome: 'Cruz' },
	    { sigla: 'GNJ', nome: 'Granja' },
	    { sigla: 'IMW', nome: 'Itarema' },
	    { sigla: 'JIJO', nome: 'Jijoca de Jericoacoara' },
	    { sigla: 'MAC', nome: 'Marco' },
	    { sigla: 'MOP', nome: 'Martinópole' },
	    { sigla: 'MNH', nome: 'Morrinhos' },
	    { sigla: 'SNR', nome: 'Senador Sá' },
	    { sigla: 'UUO', nome: 'Uruoca' },
	    { sigla: 'ACR', nome: 'Acopiara' },
	    { sigla: 'CYS', nome: 'Cariús' },
	    { sigla: 'CYN', nome: 'Catarina' },
	    { sigla: 'IAU', nome: 'Iguatu' },
	    { sigla: 'JAS', nome: 'Jucás' },
	    { sigla: 'MBC', nome: 'Mombaça' },
	    { sigla: 'PDB', nome: 'Pedra Branca' },
	    { sigla: 'PQT', nome: 'Piquet Carneiro' },
	    { sigla: 'QXO', nome: 'Quixelô' },
	    { sigla: 'SOI', nome: 'Saboeiro' },
	    { sigla: 'BXO', nome: 'Baixio' },
	    { sigla: 'CED', nome: 'Cedro' },
	    { sigla: 'DPIP', nome: 'Deputado Irapuan Pinheiro' },
	    { sigla: 'ERR', nome: 'Ererê' },
	    { sigla: 'ICO', nome: 'Ico' },
	    { sigla: 'IMI', nome: 'Ipaumirim' },
	    { sigla: 'JAG', nome: 'Jaguaratama' },
	    { sigla: 'JGB', nome: 'Jaguaribara' },
	    { sigla: 'JGE', nome: 'Jaguaribe' },
	    { sigla: 'LVM', nome: 'Lavras da Mangabeira' },
	    { sigla: 'MHW', nome: 'Milha' },
	    { sigla: 'OOS', nome: 'Orós' },
	    { sigla: 'PEO', nome: 'Pereiro' },
	    { sigla: 'SOP', nome: 'Solonópole' },
	    { sigla: 'UMI', nome: 'Umari' },
	    { sigla: 'CTS', nome: 'Crateús' },
	    { sigla: 'IDA', nome: 'Independência' },
	    { sigla: 'NOE', nome: 'Novo Oriente' },
	    { sigla: 'QTS', nome: 'Quiterianópolis' },
	    { sigla: 'ARAE', nome: 'Ararendá' },
	    { sigla: 'IPZ', nome: 'Ipaporanga' },
	    { sigla: 'IPU', nome: 'Ipu' },
	    { sigla: 'IUE', nome: 'Ipueiras' },
	    { sigla: 'MHT', nome: 'Monsenhor Tabosa' },
	    { sigla: 'NRU', nome: 'Nova Russas' },
	    { sigla: 'PSF', nome: 'Pires Ferreira' },
	    { sigla: 'PGX', nome: 'Poranga' },
	    { sigla: 'TBL', nome: 'Tamboril' },
	    { sigla: 'AEZ', nome: 'Arneiroz' },
	    { sigla: 'PBU', nome: 'Parambu' },
	    { sigla: 'TUA', nome: 'Tauá' },
	    { sigla: 'BIU', nome: 'Banabuiú' },
	    { sigla: 'BVG', nome: 'Boa Viagem' },
	    { sigla: 'CHOO', nome: 'Choro' },
	    { sigla: 'IBW', nome: 'Ibaetama' },
	    { sigla: 'ITN', nome: 'Itapiúna' },
	    { sigla: 'ITK', nome: 'Itatira' },
	    { sigla: 'MDX', nome: 'Madalena' },
	    { sigla: 'QXA', nome: 'Quixadá' },
	    { sigla: 'QXM', nome: 'Quixeramobim' },
	    { sigla: 'SPM', nome: 'Senador Pompeu' }
    ],
    'RN': [
        { sigla: 'ARE', nome: 'Ares' },
        { sigla: 'UNM', nome: 'Upanema' },
        { sigla: 'VAVR', nome: 'Venha-Ver' },
        { sigla: 'VIO', nome: 'Viçosa' }
    ],
    'PB': [
        { sigla: 'AHD', nome: 'Alhandra' },
        { sigla: 'UIN', nome: 'Uiraúna' },
        { sigla: 'VIEI', nome: 'Vieirópolis' }
    ],
    'AL': [
        { sigla: 'PYH', nome: 'Piranhas' }
    ],
    'PE': [
        { sigla: 'SGI', nome: 'Salgueiro' },
        { sigla: 'VER', nome: 'Veredinha' }
    ],
    'PI': [
        { sigla: 'AOX', nome: 'Alto Longa' },
        { sigla: 'ZRA', nome: 'Zé Doca' }
    ],
    'BA': [
        { sigla: 'JUO', nome: 'Juazeiro' },
        { sigla: 'VIR', nome: 'Várzea Nova' }
    ],
    'SE': [
        { sigla: 'AJU', nome: 'Aracaju' },
        { sigla: 'SDS', nome: 'Simão Dias' }
    ],
    'MA': [
        { sigla: 'ALN', nome: 'Alcântara' },
        { sigla: 'VGE', nome: 'Vitória do Mearim' }
    ]
};

// Função para filtrar cidades com base no estado selecionado
function filtrarCidades() {
    const estadoSelecionado = document.getElementById('estado').value;
    const cidadeSelect = document.getElementById('cidade');

    // Limpa as opções de cidade
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';

    // Popula as cidades relacionadas ao estado selecionado
    if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
        cidadesPorEstado[estadoSelecionado].forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade.sigla;
            option.textContent = cidade.nome;
            cidadeSelect.appendChild(option);
        });
    }
}

// Função para gerar os títulos
function gerarTitulos() {
    const categoria = document.getElementById("categoria").value;
    const servico = document.getElementById("servico").value;
    const cnpj = document.getElementById("cnpj").value;
    const contrato = document.getElementById("contrato").value;
    const ponto = document.getElementById("ponto").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const empresa = document.getElementById("empresa").value;

    const projetoPai = `${categoria}-${servico}-${cnpj}-${estado}-${empresa}`;
    const projetoFilho = `${categoria}-${servico}-${contrato}-${ponto}-${cidade}-${empresa}`;
    document.getElementById("projetoPai").innerText = projetoPai;
    document.getElementById("projetoFilho").innerText = projetoFilho;

    document.getElementById("resultModal").style.display = "flex"; // Exibe o modal
}

// Função para copiar textos
function copiarTexto(id) {
    const texto = document.getElementById(id).innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado com sucesso!");
    });
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("resultModal").style.display = "none"; // Oculta o modal
}

