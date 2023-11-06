export function entrarRede() {
    const sectionInit = document.createElement('section');
    sectionInit.setAttribute('class', 'cadastro');
  
    const criarCdastro = `
        <article>
          <a class ="visitante" href="/#visit">Conheça nossa rede</a>
          <a class ="botao-cadastre-se" href="/#criar-cadastro">Cadastre-se</a>
          <div>
            <p>Já tem uma conta?</p>
            <a class="botao-login-cadastro" href="/#login">Log in</a>
          </div>
        </article>
        `;
  
    sectionInit.innerHTML = criarCdastro;
    return sectionInit;
  }