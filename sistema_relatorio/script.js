document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('materialForm');
    const reportDisplayArea = document.getElementById('reportDisplayArea');
    const copyButton = document.getElementById('copyButton');
    const copyFeedback = document.getElementById('copyFeedback');

    // IDs dos campos do formulário (ordem importa para exibição/cópia)
    const fieldIds = [
        'codigoINEP', 'escola', 'qtdAPS', 'qtdRacks', 'qtdFirewall', 'qtdSimetBox',
        'qtdInjetorPOE', 'qtdSwitch24P', 'qtdSwitch8P', 'qtdCanduletes', 'qtdCurvas',
        'qtdLuvas', 'qtdCaixas', 'qtdParafusos6mm', 'qtdBuchas6mm', 'qtdAbracadeiras',
        'metragemCaboDrop', 'metragemCaboRede', 'qtdConectoresRJ45', 'qtdConectoresAPC',
        'qtdPregosFixaCabo', 'qtdConectorCaixinha', 'mgmCaboPP', 'qtdBandeja',
        'qtdPatchPanel', 'qtdKitPorcaGaiola', 'qtdCat6Femea', 'tampaCegaKeyston',
        'qtdPatchCord', 'qtdOrganizadorCabo'
    ];

    // Mapeamento de IDs para Labels (para exibição e cópia)
    // Use as labels exatamente como você quer que apareçam
    const fieldLabels = {
        codigoINEP: 'CÓDIGO INEP',
        escola: 'ESCOLA',
        qtdAPS: 'QTD DE APS',
        qtdRacks: 'QTD DE RACKS',
        qtdFirewall: 'QTD DE FIREWALL',
        qtdSimetBox: 'QTD SIMET BOX',
        qtdInjetorPOE: 'QTD INJETOR POE',
        qtdSwitch24P: 'QTD SWITCH 24P',
        qtdSwitch8P: 'QTD SWITCH 8P',
        qtdCanduletes: 'QTD DE CANDULETES',
        qtdCurvas: 'QTD DE CURVAS',
        qtdLuvas: 'QTD DE LUVAS',
        qtdCaixas: 'QTD DE CAIXAS',
        qtdParafusos6mm: 'QTD DE PARAFUSOS 6MM',
        qtdBuchas6mm: 'QTD DE BUCHAS 6MM',
        qtdAbracadeiras: 'QTD DE ABRAÇADEIRAS',
        metragemCaboDrop: 'METRAGEM DE CABO DROP',
        metragemCaboRede: 'METRAGEM DE CABO DE REDE',
        qtdConectoresRJ45: 'QTD DE CONECTORES RJ45',
        qtdConectoresAPC: 'QTD DE CONECTORES APC',
        qtdPregosFixaCabo: 'QTD DE PREGOS FIXA CABO',
        qtdConectorCaixinha: 'QTD DE CONECTOR DE CAIXINHA',
        mgmCaboPP: 'MGM DE CABO PP',
        qtdBandeja: 'QTD DE BANDEJA',
        qtdPatchPanel: 'QTD PATCH PANEL',
        qtdKitPorcaGaiola: 'QTD KIT PORCA GAIOLA',
        qtdCat6Femea: 'QTD DE CAT6 FEMEA',
        tampaCegaKeyston: 'TAMPA CEGA KEYSTON',
        qtdPatchCord: 'QTD PATCH CORD', // Corrigido de PETCH para PATCH
        qtdOrganizadorCabo: 'QTD DE ORGANIZADOR DE CABO'
    };


    // Array para armazenar os dados dos relatórios
    let reports = [];

    // Carregar dados do localStorage se existirem
    loadReportsFromLocalStorage();

    // --- Funções ---

    // Função para renderizar os relatórios na área de exibição
    function renderReports() {
        reportDisplayArea.innerHTML = ''; // Limpa a área

        if (reports.length === 0) {
            reportDisplayArea.innerHTML = '<p>Nenhum relatório adicionado ainda.</p>';
        } else {
            reports.forEach((report, index) => {
                const reportDiv = document.createElement('div');
                reportDiv.classList.add('report-item');

                // Adiciona título com nome da escola (se houver)
                const title = document.createElement('h3');
                title.textContent = `Relatório: ${report.escola || 'Escola não informada'} (INEP: ${report.codigoINEP || 'N/A'})`;
                reportDiv.appendChild(title);

                // Adiciona cada campo como um parágrafo "Label: Valor"
                fieldIds.forEach(id => {
                    // Pula os campos de identificação que já estão no título
                    if (id === 'codigoINEP' || id === 'escola') return;

                    const p = document.createElement('p');
                    const labelText = fieldLabels[id] || id; // Usa label do map ou o ID como fallback
                    const value = report[id] !== undefined ? report[id] : 'N/A';
                    // Usar <strong> para o label ajuda na formatação CSS
                    p.innerHTML = `<strong>${labelText}:</strong> ${value}`;
                    reportDiv.appendChild(p);
                });

                // Adiciona botão de Excluir
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Excluir';
                deleteButton.classList.add('delete-button');
                deleteButton.onclick = () => deleteReport(index);
                reportDiv.appendChild(deleteButton);

                reportDisplayArea.appendChild(reportDiv);
            });
        }
         // Habilita/desabilita botão de copiar
        copyButton.disabled = reports.length === 0;
    }

    // Função para adicionar um relatório (igual à versão anterior)
    function addReport(event) {
        event.preventDefault();
        const newReport = {};
        let isValid = true;

        fieldIds.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                const value = input.type === 'number'
                    ? (input.value.trim() === '' ? 0 : parseFloat(input.value.replace(',', '.'))) // Trata vírgula como ponto decimal
                    : input.value.trim();

                if (input.required && (value === '' || (input.type === 'number' && isNaN(value)))) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    console.error(`Campo obrigatório "${id}" está vazio ou inválido.`);
                } else {
                     input.style.borderColor = '#ccc';
                }
                 // Garante que números sejam armazenados como números
                newReport[id] = (input.type === 'number' && !isNaN(value)) ? value : String(value);
            } else {
                console.error(`Elemento com ID "${id}" não encontrado no formulário.`);
                isValid = false;
            }
        });

        if (!isValid) {
            alert("Por favor, preencha todos los campos obligatorios correctamente.");
            return;
        }

        reports.push(newReport);
        saveReportsToLocalStorage();
        renderReports();
        form.reset();
        document.getElementById('codigoINEP').focus();
        showFeedback('Relatório adicionado com sucesso!', 'green');
    }

    // Função para excluir um relatório (igual à versão anterior)
    function deleteReport(index) {
        if (confirm(`Tem certeza que deseja excluir o relatório da escola "${reports[index]?.escola || 'esta escola'}"?`)) {
            reports.splice(index, 1);
            saveReportsToLocalStorage();
            renderReports();
            showFeedback('Relatório excluído.', 'orange');
        }
    }

    // *** FUNÇÃO DE CÓPIA MODIFICADA ***
    function copyReportsToClipboard() {
        if (reports.length === 0) {
            showFeedback('Nenhum relatório para copiar.', 'red');
            return;
        }

        let textToCopy = '';

        reports.forEach((report, reportIndex) => {
            // Adiciona um separador entre relatórios (exceto antes do primeiro)
            if (reportIndex > 0) {
                textToCopy += '\n---\n\n'; // Separador visual
            }

             // Adiciona Cabeçalho do Relatório Individual (Opcional, mas útil)
            textToCopy += `RELATÓRIO ESCOLA: ${report.escola || 'N/A'} (INEP: ${report.codigoINEP || 'N/A'})\n`;
            textToCopy += `-------------------------------------------\n`; // Linha divisória

            // Adiciona cada campo no formato "LABEL: VALOR"
            fieldIds.forEach(id => {
                // Não precisa repetir código e escola se já estão no cabeçalho opcional
                // if (id === 'codigoINEP' || id === 'escola') return;

                const labelText = fieldLabels[id] || id; // Pega o label correto
                const value = report[id] !== undefined ? report[id] : '';
                textToCopy += `${labelText}: ${value}\n`; // Formato Chave: Valor
            });
        });

        // Copia para a área de transferência
        navigator.clipboard.writeText(textToCopy.trim()) // trim() remove espaços/linhas extras no final
            .then(() => {
                showFeedback('Relatórios copiados para a área de transferência (Formato Lista)!', 'green');
            })
            .catch(err => {
                console.error('Erro ao copiar para a área de transferência:', err);
                showFeedback('Falha ao copiar. Verifique as permissões do navegador ou tente manualmente.', 'red');
                 // Fallback: Selecionar e copiar manualmente
                 prompt("Não foi possível copiar automaticamente. Copie manualmente o texto abaixo (Ctrl+C):", textToCopy.trim());
            });
    }

    // Função para mostrar feedback (igual à versão anterior)
    function showFeedback(message, color = 'green') {
        copyFeedback.textContent = message;
        copyFeedback.style.color = color;
        // Limpa a mensagem após alguns segundos
        setTimeout(() => {
            if (copyFeedback.textContent === message) { // Evita limpar feedback mais recente
               copyFeedback.textContent = '';
            }
        }, 5000);
    }

     // Funções de localStorage (iguais à versão anterior)
    function saveReportsToLocalStorage() {
        try {
            localStorage.setItem('materialReportsList', JSON.stringify(reports)); // Use uma chave diferente se necessário
        } catch (e) {
            console.error("Erro ao salvar no localStorage:", e);
            alert("Não foi possível salvar os relatórios. O localStorage pode estar cheio ou desabilitado.");
        }
    }

    function loadReportsFromLocalStorage() {
        const storedReports = localStorage.getItem('materialReportsList');
        if (storedReports) {
            try {
                reports = JSON.parse(storedReports);
            } catch (e) {
                console.error("Erro ao carregar dados do localStorage:", e);
                reports = [];
                localStorage.removeItem('materialReportsList');
            }
        }
        renderReports(); // Renderiza a exibição com os dados carregados
    }

    // --- Event Listeners ---
    form.addEventListener('submit', addReport);
    copyButton.addEventListener('click', copyReportsToClipboard);

}); // Fim do DOMContentLoaded