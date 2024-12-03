document.getElementById('gerarDescricao').addEventListener('click', () => {
  const orgao = document.getElementById('orgao').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const gw = document.getElementById('gw').value.trim();

  // Valida se todos os campos foram preenchidos
  if (!orgao || !rua || !numero || !cidade || !gw) {
    alert('Por favor, preencha todos os campos antes de gerar a descrição.');
    return;
  }

  // Cria a descrição formatada
  const descricao = `
    📌 Órgão: ${orgao}\n
    🛤️ Rua: ${rua}\n
    🏢 Número: ${numero}\n
    🌆 Cidade: ${cidade}\n
    🌐 GW/IP: ${gw}
  `;

  // Atualiza o conteúdo do pop-up
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
  }).catch(err => {
    alert('Erro ao copiar a descrição: ' + err);
  });
});
