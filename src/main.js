// Este es el punto de entrada de tu aplicacion
// aqui exportaras las funciones que necesites

// import { myFunction } from './lib/index.js';
import landingPage from './pages/pg_inicial/landing_page.js';
import { intro } from './pages/pg_inicial/intro.js';
import { entrarRede } from './pages/pg_inicial/start_interaction.js';
// import { criarCadastro } from './pages/cadastro/cadastro.js';
// import { login } from './pages/login/login.js';
// import { feedHeader } from './pages/feed/feed.js';


const addElementos = document.querySelector('#root');
let carregouForm = false;
let carregouLogin = false;

function addIntro() {
  addElementos.appendChild(intro());

  window.addEventListener('hashchange', () => {
    if (carregouForm === false || carregouLogin === false) {
      switch (window.location.hash) {
        case ' ':
          break;
        case '#conecta':
          // addElementos.innerHTML = '';
          addElementos.appendChild(entrarRede());
          break;
        case '#login':
          addElementos.innerHTML = '';
          addElementos.appendChild(login());
          carregouLogin = true;

          break;
        case '#criar-cadastro':
          addElementos.innerHTML = '';
          addElementos.appendChild(criarCadastro());
          carregouForm = true;
          break;
        default:
          addElementos.appendChild(landingPage());
          setTimeout(addIntro, 2500);
          break;
      }
    }
  });
}

window.addEventListener('load', () => {
  addElementos.appendChild(landingPage());
  setTimeout(addIntro, 2000);
  // routes();
});