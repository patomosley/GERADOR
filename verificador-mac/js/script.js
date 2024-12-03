document.getElementById('gerarDescricao').addEventListener('click', () => {
  const orgao = document.getElementById('orgao').value;
  const rua = document.getElementById('rua').value;
  const numero = document.getElementById('numero').value;
  const cidade = document.getElementById('cidade').value;
  const gw = document.getElementById('gw').value;

  // Verifica se todos os campos estão preenchidos
  if (!orgao || !rua || !numero || !cidade || !gw) {
    alert('Por favor, preencha todos os campos antes de gerar a descrição.');
    return;
  }

  // Gera a descrição com emojis
  const descricao = `
    📌 Órgão: ${orgao}\n
    🛤️ Rua: ${rua}\n
    🏢 Número: ${numero}\n
    🌆 Cidade: ${cidade}\n
    🌐 GW/IP: ${gw}
  `;

  // Exibe a descrição no pop-up
  document.getElementById('descricaoGerada').textContent = descricao;
  document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', () => {
  // Fecha o pop-up
  document.getElementById('popup').classList.add('hidden');
});

document.getElementById('copiarDescricao').addEventListener('click', () => {
  const descricao = document.getElementById('descricaoGerada').textContent;
  navigator.clipboard.writeText(descricao).then(() => {
    alert('Descrição copiada para a área de transferência!');
    // Fecha o pop-up após copiar
    document.getElementById('popup').classList.add('hidden');
  }).catch((err) => {
    alert('Erro ao copiar a descrição: ' + err);
  });
});
