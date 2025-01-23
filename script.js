const apikey = "faef8cac" //ceci est ma clé API
//https://www.omdbapi.com/?apikey=faef8cac&s=

const containten= document.getElementById('tendances');
const container = document.getElementById('2024')
let movieData;
async function getData() {
try{
    const reponse = await fetch (`https://omdbapi.com/?apikey=${apikey}&s=Lynch`);
        if (!reponse.ok){
            throw new Error(`Erreur ${reponse.status}`)
        }
    const data = await reponse.json()
    console.log('Data =', data);
    movieData = data;
    console.log(data.Search[1].Title)



} catch (error) {
    console.error("Erreur:", error)
}
}
async function getData2() {
    try{
        const reponse = await fetch (`https://omdbapi.com/?apikey=${apikey}&s= &y=2024`);
            if (!reponse.ok){
                throw new Error(`Erreur ${reponse.status}`)
            }
        const data = await reponse.json()
        console.log('Data =', data);
        movieData2 = data;
        console.log(data.Search[1].Title)
    
    
    
    } catch (error) {
        console.error("Erreur:", error)
    }}


async function main (){
    await getData();
    for (let i =0; i<3; i++){
    let Div =document.createElement('div')
    Div.id= ("carte");
    
    titre =document.createElement('h2');
    image = document.createElement('img');
    image.src = (movieData.Search[i].Poster);
    titre.textContent = (movieData.Search[i].Title);
    let more = document.createElement('a')
    more.href = "../movie/movie.html"  
    more.textContent= "Click for more informations"
    Div.appendChild(image);
    Div.appendChild(titre);
    Div.appendChild(more);
    containten.appendChild(Div);

    }
   /* await getData2();
    for (let i = 0; i<10; i++){
    
    titre2 = document.createElement('h2');
    image2 = document.createElement('img');
    image2.src = (movieData2.Search[i].Poster)
    titre2.textContent = (movieData2.Search[i].Title);
    container.appendChild(titre2)
    container.appendChild(image2)


    
    }*/

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