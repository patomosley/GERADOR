const descricoes = {
    "NOC-SO": {
        "REMOVER FILTRO": "Realizar remoção de filtro\n\n*IP:\n*LOGIN:\n*PORTA A SER REMOVIDA:",
        "ALTERAR PLANO": "Realizar alteração de Plano do Cliente\n\n*VLAN:",
        "REDE DE GERENCIA": "Realizar configuração de rede de gerencia para o cliente.\n\n*VLAN: A DEFINIR",
        "LIBERAR PREFIXOS": "Peço que sejam liberados os prefixos descritos abaixo:\n\n*ASN:\n*PREFIX V4:\n*PREFIX V6:\n*RADB:\n\nLiberar na policy do cliente a seguir\n\n*CLIENTE:\n*ASN:\n*VLAN:",
        "ALTERAR CONFIGURAÇÃO": "Por favor realizar alteração de configuração\n\nMotivo:\n\n*DEVICE\n*INTERFACE:\n*VLAN:",
        "IP DEDICADO DIRETO": "Peço que seja configurado circuito IP dedicado com base nas informações descritas\n\nVlan: A definir\nPeer Valido: A definir\nMáscara:",
        "IP DEDICADO ROTEADO": "Peço que seja configurado circuito IP dedicado com base nas informações descritas\n\nVlan: A definir\nPeer Valido: A definir\nMáscara:\n\nPeer Privado: A Definir",
        "CONFIGURAR IPT": "Peço que seja configurado o circuito BGP de acordo com os dados descritos\n\n*VLAN: A Definir\n*Cap. de Tráfego:\n*ASN:\n*CIDR v4:\n*CIDR v6:\n*Routing Table:\n*Radb:",
        "CONFIGURAR L2VPN": "Peço que seja configurado o L2VPN com base nas informações descritas.\n\n*Vlan: A definir\n\nPonta A:\n*Cód Contrato:\n*Device:\n*Interface:\n\nPonta B:",
        "CONFIGURAR L3VPN": "Peço que seja configurado o L3VPN com base nas informações descritas.\n\n*Vlan: A Definir\n*Rede lan:",
        "CONFIGURAR L3VPN VRF": "Peço que seja configurado o L3VPN com base nas informações descritas.\n\n*VRF:\n*Vlan: A Definir\n*Rede lan:",
        "CANCELAMENTO DE CLIENTE": "Peço que seja removida a configuração do cliente mediante os dados informados\n\n*VLAN:",
        "CONFIGURAR IPT SENCINET": "Peço para que seja realizado configuração do IPT do cliente Sencient\n\n*VLAN: A DEFINIR\n\n*LOCAL-PEER: \n*LOCAL-AS: 64999\n*REMOTE PEER:\n*REMOTE AS: 64765\n\n*LIMITE PREFIXO: 10",
        "SITE SEM ACESSO": "Cliente reclama que não consegue acesso a sites em específico no seu LINK\n\nSITE:\n*VLAN:\n*Device\n*Interface:",
        "REVISAO DE CONFIGURAÇÃO": "DESCRIÇÃO DO PROBLEMA:\n\n*VLAN:\n*DEVICE:\n*INTERFACE:"
    },
    "NOC-O&M": {
        "RESERVA DE INTERFACE": "Por gentileza, realizar reserva de interface para ativação do cliente.",
        "ATIVAÇÃO DE INTERFACE": "Por gentileza, realizar configuração da interface, segue dados abaixo.\n\n*SWITCH:\n*INTERFACE:"
    },
    "NOC-ENGENHARIA": {
        "VIABILIDADE PARA ATIVAÇÃO": "    CNPJ:\n\nCOD CONTRATO:\n\nPor favor verificar se temos capacidade para atender ativação mediante dados informados.",
        "VIABILIDADE PARA UPGRADE": "CNPJ:\n\nCOD CONTRATO:\n\nPor favor verificar se temos capacidade para atender upgrade mediante dados informados."
    },
    "GPON": {
        "VERIFICAÇÃO DE ONU": "Peço para que seja realizada a verificação da ONU\nMotivo da verificação:",
        "CONFIGURAR VLAN": "Realizar configuração de VLAN\n\n*LAN:\n*VLAN:\n*OLT:",
        "ATUALIZAR ONU": "Verificar se ONU possui atualizações disponíveis, caso sim, realizar atualização da mesma\n\n*ONU:\n*OLT:",
        "TESTE DE P2P": "Configurar Rede na ONU e realizar teste de conexão entre o HOST e GW\n\n*REDE:\n*HOST:\n*GATEWAY:\n*VLAN:",
        "TESTE P2P L2L": "Realizar configuração de uma rede nas ONUs e realizar teste de ICMP entre as mesmas para testarmos a comunicação.\n\n*REDE:\n\nPONTA A\n*ONU:\n*VLAN:\n*HOST:\n\nPONTA B\n*ONU:\n*VLAN:\n*HOST:"
    },
    "ESTOQUE": {
        "SEPARAR MATERIAL": "Realizar separação de material para atender Projeto."
    },
    "REDES WIRELESS": {
        "CONFIGURAÇÃO DE ENLACE": "Será necessário a configuração do enlace mediante troca de equipamentos para o upgrade do link.\n\nDADOS DA PONTA A\n\nDADOS DA PONTA B:"
    },
    "SAP": {
        "SUPLEMENTAÇÃO": "Realizar suplementação de material mediante anexo da cópia da Planilha de Orçamento de material.",
        "RETIFICAÇÃO": "Realizar retificação de material mediante anexo da cópia da Planilha de Orçamento de material.",
        "CRIAÇÃO DE PROJETO": "Realizar criação do projeto mediante anexo da cópia da Planilha de Orçamento de material."
    },
    "TELEFONIA": {
        "FALHA DE AUTENTICAÇÃO": "Telefonia apresenta falha de autenticação.",
        "NAO EFETUA LIGAÇÃO": "Serviço de telefonia não está efetuando ligações.\n\n*Operadoras testadas:",
        "NAO RECEBE LIGAÇÕES": "Serviço de telefonia não recebe ligações.\n\n*Operadoras testadas:",
        "LIGAÇÃO FEITA FALHANDO": "Serviço de telefonia apresenta instabilidade nas ligações realizadas.",
        "DESBLOQUEIO LIGAÇÕES INTERNACIONAIS": "Cliente deseja que seja realizado seu desbloqueio para conseguir ligar internacionalmente.",
        "BLOQUEIO LIGAÇÕES INTERNACIONAIS": "Cliente deseja que seja realizado bloqueio de ligações internacionais em sua linha.",
        "DESBLOQUEIO PARA LIGAÇÕES 0300/0500": "Cliente deseja que linha possa receber ligações dos números 0300/0500.",
        "BLOQUEIO PARA LIGAÇÕES 0300/0500": "Cliente deseja que linha não receba ligações dos números 0300/0500.",
        "DESBLOQUEIO LIGAÇÕES PARA NUMERO ESPECIFICO": "Mediante solicitação do cliente, o mesmo deseja receber ligações da seguinte linha bloqueada\n\n*Número para ser desbloqueado:",
        "BLOQUEIO LIGAÇÕES PARA NUMERO ESPECIFICO": "Mediante solicitação do cliente, o mesmo não deseja mais receber ligações da seguinte linha\n\n*Número para ser bloqueado:",
        "LIMITADOR DE CONSUMO": "Cliente solicita que em sua telefonia haja bloqueio de limite\n\n*Valor limitante R$: ",
        "ALTERAÇÃO DE LIMITE": "Cliente solicita alteração de limite alocado em sua telefonia.\n\n*Novo valor limitante R$: ",
        "HISTORICO DE LIGAÇÕES": "Cliente solicita histórico de ligações.\n\n*Período Solicitado:",
        "SUPORTE INTERNO": "Realizar verificação de serviço.\n\n*Reclamação do cliente:",
        "ATIVAÇÃO DE CLIENTE": "Solicito que seja realizada a configuração do serviço do cliente de acordo com a nova solicitação do mesmo repassada em projeto.\n\n*DADOS DE CONTATO:\n\n*BREVE RESUMO DO QUE DEVE SER FEITO:\n\n*SERVIÇO:\n*LINHAS:\n*EQUIPAMENTO:",
        "CANCELAMENTO": "Cliente deseja que seu serviço atual seja desativado.\n\n*Motivo:",
        "EDD DOWN": "Realizar verificação do status do EDD."
    },
    "TELEFONIA 5G": {
        "(EM BREVE)": "ESTEIRA AINDA NÃO TEM CATEGORIAS PARA CRIAÇÃO DE PADRÃO."
    },
    "MONITORAMENTO SUPORTE": {
        "CADASTRO DE CIRCUITO": "Realizar cadastro de unidade no monitoramento.",
        "ALTERAÇÃO IP UNIDADE CADASTRADA": "Por gentileza, realizar alteração de monitoramento da unidade que já atendemos."
    }
};
function toggleMenu() {
    const menu = document.getElementById('menu');
    const mainContent = document.querySelector('.main-content');
    menu.classList.toggle('active');
    mainContent.style.marginLeft = menu.classList.contains('active') ? '250px' : '0';
}

function mostrarResultados(setor, servico, cliente, designacao) {
    const resultadoContainer = document.getElementById("resultadoContainer");

    // Obtendo descrição personalizada
    const descricaoPadrao = `Descrição detalhada do serviço: ${servico} para o cliente ${cliente}.`;
    const descricaoPersonalizada = descricoes[setor]?.[servico] || descricaoPadrao;

    const titulo = `[${setor}]-${servico}-${cliente}-${designacao}`;

    resultadoContainer.innerHTML = `
        <div class="resultado">
            <strong>TÍTULO:</strong>
            <div id="titulo">${titulo}</div>
            <button onclick="copiarTexto('titulo')">Copiar Título</button>
        </div>
        <div class="resultado">
            <strong>DESCRIÇÃO:</strong>
            <div id="descricao">${descricaoPersonalizada}</div>
            <button onclick="copiarTexto('descricao')">Copiar Descrição</button>
        </div>
    `;

    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function copiarTexto(elementId) {
    const texto = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(texto).then(() => {
        const notification = document.getElementById("copy-notification");
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    });
}

function mostrarErro(mensagem) {
    const errorNotification = document.getElementById("error-notification");
    errorNotification.textContent = mensagem;
    errorNotification.style.display = "block";
    setTimeout(() => {
        errorNotification.style.display = "none";
    }, 3000);
}

function atualizarServicos() {
    const servicoSelect = document.getElementById("servicoSelect");
    servicoSelect.innerHTML = '';
    const setor = document.getElementById("setorSelect").value;
    
    let servicos = Object.keys(descricoes[setor] || {});

    servicos.forEach(servico => {
        const option = document.createElement("option");
        option.value = servico;
        option.textContent = servico;
        servicoSelect.appendChild(option);
    });
}

function gerarTituloEDescricao() {
    const cliente = document.getElementById("clienteInput").value.toUpperCase();
    const contrato = document.getElementById("contratoInput").value.toUpperCase();
    const setor = document.getElementById("setorSelect").value.toUpperCase();
    const servico = document.getElementById("servicoSelect").value.toUpperCase();

    if (cliente && contrato && setor && servico) {
        mostrarResultados(setor, servico, cliente, contrato);
    } else {
        mostrarErro("Por favor, preencha todos os campos.");
    }
}
