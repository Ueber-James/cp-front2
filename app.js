
const formulario = document.querySelector('form')
const cardc = document.querySelector('.cardsbody');
const animesCriadas = []

formulario.addEventListener('submit', function (event) {

    const dados = {
        nomedoanime: document.querySelector('#animenome').value,
        temporadas: document.querySelector('#temporadas').value,
        url: document.querySelector('#url').value,
        descricao: document.querySelector('#descricao').value,



    };

    adicionarCard(dados);
    event.preventDefault();
    

    
});



function adicionarCard(dados) {


    animesCriadas.push(dados);

    cardc.innerHTML = ""
    animesCriadas.forEach((chama) => {
        const card = document.createElement('div')
        card.innerHTML = ` 
        
        <img src="${chama.url}" />
    <h3 class="textcards">${chama.nomedoanime}</h3>
    <h4 class="texth4">tempotada(s)</h4>
    <p class="temp">${chama.temporadas}</p>
    <p class="text">${chama.descricao}</p>
     `
        card.setAttribute("class", "card");
        cardc.appendChild(card);

        card.addEventListener('click', ()=>{ card.remove()})

    });
}




