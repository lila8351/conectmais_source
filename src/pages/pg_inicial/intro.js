export function intro() {
    const container = document.createElement('div');
  
    const introduce = `
    <section class="introduce">
    <article class="intro-a1>
    <p>💡Você já imaginou um lugar onde a economia criativa e a magia do upcycling se encontram?</p>
    <p>Aqui a criatividade é a moeda corrente e a inovação é nossa paixão.</p>
    <p>Compartilhe suas ideias, divulgue seus produtos, encontre parceiros para colaborações épicas.<p>
    </article>
    
    <article class="intro-a2">
    <p><strong>🔄Upcycling: </strong></p>
    <p>Este é o nosso mantra. 
    <p>Transforme itens usados em obras-primas ecológicas. 
    <p>Descubra inspiração em coisas improváveis. 
    <p>Transforme o comum em extraordinário de forma sustentável!</p>
    </article>

    <article class="intro-a3">
    <p>🌈Diversidade e inclusão.🌍</p> 
    <p>Esse é ingrediente fundamental para fazer florescer ideias inovadoras!</p> 
    <p>Juntes construimos um futuro brilhante, inovador e sustentável.</p>
    </article>

    <a class="conecte-se" href="/#conecta">Conecte-se!</a>
    </section>
        `;
  
    container.innerHTML = introduce;
  
    return container;
  };