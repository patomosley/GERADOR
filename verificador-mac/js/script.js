document.getElementById('macForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let macAddress = document.getElementById('macInput').value;

    // Validação básica do formato do MAC Address
    if (!/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(macAddress)) {
        document.getElementById('result').innerText = "Formato de MAC Address inválido. Tente novamente.";
        return;
    }

    // Limpa os caracteres ':' e '-' do MAC
    macAddress = macAddress.replace(/[:-]/g, "").toUpperCase();

    // URL da API para consulta de fabricante pelo MAC Vendors (substitua pela sua chave, se necessário)
    const apiUrl = `https://api.macvendors.com/${macAddress}`;

    // Fazendo a consulta usando fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao consultar o MAC Address.");
            return response.text();
        })
        .then(manufacturer => {
            document.getElementById('result').innerText = `Fabricante: ${manufacturer}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = "Fabricante não encontrado ou erro na consulta.";
            console.error(error);
        });
});
