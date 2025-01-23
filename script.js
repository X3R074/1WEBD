const apikey = "faef8cac" //ceci est ma clé API
//https://www.omdbapi.com/?apikey=faef8cac&s=

const container= document.getElementById('movie');
let movieData;
function Display (movies) {

    const moviesContainer = document.getElementsByClassName('movies');
  
    
    }




async function getData() {
try{
    const reponse = await fetch (`https://omdbapi.com/?apikey=${apikey}&s=Twin peaks`);
        if (!reponse.ok){
            throw new Error(`Erreur ${reponse.status}`)
        }
    const data = await reponse.json
    console.log('Data =', data);
    movieData = data;
    console.log(data.Search[1].Title)



} catch (error) {
    console.error("Erreur:", error)
}
}


async function main (){
    await getData();
    for (let i =0; i<10; i++){

    titre =document.createElement('h2');
    image = document.createElement('img');
    image.src = (movieData.Search[i].Poster);
    titre.textContent = (movieData.Search[i].Title);
    container.appendChild(titre);
    container.appendChild(image);

    }

}
main ()
/*fetch(url)

.then(response => response.json()) 
.then (data => {   myData = data;} )
.catch(error => console.error('Erreur:', error))


console.log(info.search[0].Title);
console.log(info.Title);

}




function Display (movies) {

    const moviesContainer = document.getElementsByClassName('movies');
  
    
    }
*/
//console.log(info.info);