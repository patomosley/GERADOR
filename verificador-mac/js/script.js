document.getElementById('macForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const macAddress = document.getElementById('macInput').value.replace(/[^A-Fa-f0-9]/g, ''); // Limpa o MAC
    const oui = macAddress.slice(0, 6).toUpperCase(); // Extrai o OUI (primeiros 6 dígitos)

    // URL da API para consulta de OUI (exemplo com uma API fictícia)
    const apiUrl = `https://api.macvendors.com/${oui}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao consultar o MAC Address.");
            return response.text();
        })
        .then(manufacturer => {
            document.getElementById('result').innerText = `Fabricante: ${manufacturer}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = "Fabricante não encontrado.";
            console.error(error);
        });
});

