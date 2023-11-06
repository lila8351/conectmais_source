export default () => {
    const container = document.createElement('header');
  
    const landingPage = `
        <section class="img-container">
        <!-- Side Navigation -->
        <nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
        <h1 class="w3-xxxlarge w3-text-theme">Side Navigation</h1>
        <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
        <a href="#" class="w3-bar-item w3-button">Proposta</a>
        <a href="#" class="w3-bar-item w3-button">Valores</a>
        <a href="#" class="w3-bar-item w3-button">Parceiros</a>
        <a href="#" class="w3-bar-item w3-button">Loja</a>
        </nav>

        
        <!-- img id="background" src="./assets/header.png" -->
  
        </section>
        `;
  
    container.innerHTML = landingPage;
  
    return container;
  };