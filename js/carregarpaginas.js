export async function carregarPagina(nome, atualizarURL = true) {
  const conteudo = document.getElementById('conteudo');

  // Transição suave
  conteudo.classList.add('fade-out');
  await new Promise(res => setTimeout(res, 300));

  try {
    const resposta = await fetch(`pages/${nome}.html`);
    const html = await resposta.text();
    conteudo.innerHTML = html;

    // Executa scripts embutidos
    const temp = document.createElement('div');
    temp.innerHTML = html;
    temp.querySelectorAll('script').forEach(orig => {
      const novo = document.createElement('script');
      if (orig.src) {
        novo.src = orig.src;
      } else {
        novo.textContent = orig.textContent;
      }
      document.body.appendChild(novo);
    });

    // Script modular externo
    const scriptModular = document.createElement('script');
    scriptModular.src = `js/pages/${nome}.js`;
    scriptModular.defer = true;
    document.body.appendChild(scriptModular);

    if (atualizarURL) {
      history.pushState({ pagina: nome }, null, `/${nome}`);
    }

    // Fade-in
    conteudo.classList.remove('fade-out');
    conteudo.classList.add('fade-in');
    setTimeout(() => conteudo.classList.remove('fade-in'), 300);
  } catch (erro) {
    conteudo.innerHTML = `<p>Erro ao carregar: ${erro}</p>`;
  }
}
