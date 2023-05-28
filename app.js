var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const main = document.querySelector('main')
// Public API : https://pokeapi.co/api/v2/pokemon/ditto
const url = "https://pokeapi.co/api/v2/pokemon/"
// asynchronus function : 
async function  getThemALL(){
    const response = await fetch(url)       // obtain promise
    const data = await response.json()      // obtain json object 
    // json structure to acces pokemon features : 
    // data.results[id]
    //console.log(data.results)
    for (let card of data.results){
        getPokemon(card);
    }
   

}

async function getPokemon(pokemon){
    // json structure : name & url
    //console.log(pokemon)
    const pokemonApiResponse = await fetch(pokemon.url)
    const pokemondata = await pokemonApiResponse.json()
    // json structure to acces pokemon picture svg : 
    // pokemondata. sprites.other.dream_world.front_default
    //console.log(pokemondata. sprites.other.dream_world.front_default)
    buildCard(pokemondata)
    likMe();

}
 function buildCard(pokemon){
    let card = document.createElement('div');
    card.className = "pokemon-container card w-25 p-3" // bootstrap styling

    let img = document.createElement('img')
    img.className = "card-img-top img-fluid rounded bg-dark bg-gradient " // bootstrap styling

    img.src = pokemon.sprites.other.dream_world.front_default

    let cardBody = document.createElement('div')
    cardBody.className = "card-body" // bootstrap styling

    let cardTitle = document.createElement('h3')
    cardTitle.className = "card-title" // bootstrap styling
    cardTitle.innerHTML = pokemon.name
   
    let cardText = document.createElement('p')
    cardText.className = "card-text"
    cardText.innerHTML = '0'; // likes score init at 0
    
    let button = document.createElement('button')
    button.className = "btn btn-danger"
    button.innerHTML = 'Like Me !'
    

    main.appendChild(card);
    card.appendChild(img);    
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(button);
 }

 function likMe(){
    const buttons = document.querySelectorAll('button');
    console.log ('test',buttons);
    //console.log ('test',document.querySelector('button'));
    for (let btn of buttons){
        btn.addEventListener('click', (e)=>{
            console.log(e.target)
        })
    }
 }

getThemALL()

