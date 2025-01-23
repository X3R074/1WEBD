const apikey = "faef8cac"
let nom;
console.log("bonjour");
const container = document.getElementById('cards');
let movieData
let film = document.getElementById("search")
let filmMore
let page =1;

film.addEventListener('input', async ()=>{
    console.log(film.value);
    nom = (film.value)
    console.log(nom);
    if (nom){
    await getData();}
    else{
        container.innerHTML=""
    }
})



//window.onload = getData ();
async function getData(page = 1) {
    
    try{
        
        console.log(film)
        const reponse = await fetch(`https://omdbapi.com/?apikey=${apikey}&s=${nom}&type=movie&page=${page}`);
            if (!reponse.ok){
                throw new Error(`Erreur ${reponse.status}`) 
            }
        const data = await reponse.json();

        if (!data.Search){
            container.innerHTML="";
            let error= document.createElement('h1');
            error.textContent="No Result found"
            container.appendChild(error)
            return;
        }

        console.log('Data = ', data )
        movieData= data;
        container.innerHTML="";
        console.log(data.Search[1].Title)
        console.log(data.Search[0].Title)

        for (let i = 0; i<10; i++){
            if (movieData.Search[i].Poster != 'N/A') {


                let Div =document.createElement('div')
                Div.id=("carte");    

                titre = document.createElement('h2');
                image = document.createElement('img');

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
                container.appendChild(Div);
                
        }}


    } catch (error) {
        console.error("Erreur:", error)
    }


    }
    
    
   