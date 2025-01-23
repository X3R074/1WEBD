
const selectedMovie = JSON.parse (localStorage.getItem('selectedMovie'));

const container = document.getElementById("movie");
console.log(selectedMovie)
let Div =document.createElement('div')
    Div.id= ("carte");
    
    let titre =document.createElement('h2');
    let image = document.createElement('img');
    image.src = (selectedMovie.Poster);
    titre.textContent = (selectedMovie.Title);
    let more = document.createElement('a')
    Div.appendChild(image);
    Div.appendChild(titre);
    Div.appendChild(more);
    container.appendChild(Div);