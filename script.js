const apikey = 'faef8cac' //ceci est ma clé API
//https://www.omdbapi.com/?apikey=faef8cac&s=
let babidou
let url=(`https://www.omdbapi.com/?apikey=${apikey}&s=${search}`);
console.log (url)
//requette pour récupérer requette pour chercher 
fetch(url)

.then(response => response.json()) 
.then (data => json=data)
.catch(error => console.error('Erreur:', error))

const info = JSON.parse(babidou);

console.log(info.search[0].Title);
console.log(info.Title);






function Display (movies) {

    const moviesContainer = document.getElementsByClassName('movies');
  
    
    }

//console.log(info.info);