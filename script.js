const apikey = "faef8cac" //ceci est ma clé API
//https://www.omdbapi.com/?apikey=faef8cac&s=

const containten= document.getElementById('tendances');
const container = document.getElementById('two')
let movieData, movieData2;
let filmMore;
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
        const reponse = await fetch (`https://omdbapi.com/?apikey=${apikey}&s=Life&y=2024`);
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
    
    let titre =document.createElement('h2');
    let image = document.createElement('img');
    image.src = (movieData.Search[i].Poster);
    titre.textContent = (movieData.Search[i].Title);
    let more = document.createElement('a')
    more.href = "../movie/movie.html"  
    more.textContent= "Click for more informations"
    more.addEventListener('click', function (){
        filmMore = (movieData.Search[i])
        localStorage.setItem('selectedMovie', JSON.stringify(filmMore));
        console.log(filmMore);  
    } )
    Div.appendChild(image);
    Div.appendChild(titre);
    Div.appendChild(more);
    containten.appendChild(Div);

    }
    await getData2();
    for (let i = 0; i<10; i++){
    let MaDiv=document.createElement('div')
    MaDiv.id =("carte2");
    let titre2 = document.createElement('h2');
    let image2 = document.createElement('img');
    image2.src = (movieData2.Search[i].Poster)
    titre2.textContent = (movieData2.Search[i].Title);
    let more2 = document.createElement('a')
    more2.href = "../movie/movie.html"  
    more2.textContent= "Click for more informations"
    more2.addEventListener('click', function (){
        filmMore = (movieData2.Search[i])
        localStorage.setItem('selectedMovie', JSON.stringify(filmMore));
        console.log(filmMore);  
    } )
    MaDiv.appendChild(titre2)
    MaDiv.appendChild(image2)
    MaDiv.appendChild(more2);
    container.appendChild(MaDiv);


    
    }

}
main ()