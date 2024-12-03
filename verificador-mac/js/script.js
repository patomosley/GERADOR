document.getElementById('gerarDescricao').addEventListener('click', () => {
  const orgao = document.getElementById('orgao').value;
  const rua = document.getElementById('rua').value;
  const numero = document.getElementById('numero').value;
  const cidade = document.getElementById('cidade').value;
  const gw = document.getElementById('gw').value;

  const descricao = `
    📌 Órgão: ${orgao}\n
    🛤️ Rua: ${rua}\n
    🏢 Número: ${numero}\n
    🌆 Cidade: ${cidade}\n
    🌐 GW/IP: ${gw}
  `;

  document.getElementById('descricaoGerada').textContent = descricao;
  document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('popup').classList.add('hidden');
});

document.getElementById('copiarDescricao').addEventListener('click', () => {
  const descricao = document.getElementById('descricaoGerada').textContent;
  navigator.clipboard.writeText(descricao);
  alert('Descrição copiada para a área de transferência!');
});
