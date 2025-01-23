const apikey = "faef8cac"

const selectedMovie = JSON.parse (localStorage.getItem('selectedMovie'));

const container = document.getElementById("movie");
console.log(selectedMovie)
const ID=selectedMovie.imdbID

async function getData(ID) {
try{
    const reponse = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${ID}&plot=full`)
        if (! reponse.ok){
            throw new Error(`Erreur ${reponse.status}`);
        }
    const data = await reponse.json();
    film=data;
    return film;
    
}
catch (error){
    console.error("Error:", error)
}    
}

async function main () {
    

film = await getData(ID);


let Div =document.createElement('div')
    Div.id= ("carte");
    
    let titre =document.createElement('h2');
    let image = document.createElement('img');
    let description = document.createElement('p')
    let genre = document.createElement('h4')
    let actors = document.createElement('h5')
    image.src = (film.Poster);
    titre.textContent = (film.Title);
    description.textContent = ("Plot :", film.Plot);
    genre.textContent=("Genre :",film.Genre);
    actors.textContent=("Actors :", film.Actors)
    let more = document.createElement('a')
    Div.appendChild(image);
    Div.appendChild(titre);
    Div.appendChild(description);
    Div.appendChild(genre);
    Div.appendChild(actors);
    container.appendChild(Div);
}

main();