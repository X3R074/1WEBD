const apikey = "faef8cac"
let nom;
console.log("bonjour");
const container = document.getElementById('cards');
let movieData
let film = document.getElementById("search")

//window.onload = getData ();
async function getData() {
    film.addEventListener('input',()=>{
        console.log(film.value);
        nom = (film.value)
        console.log(nom);
    })
    try{
        
        console.log(film)
        const reponse = await fetch(`https://omdbapi.com/?apikey=${apikey}&s=${film.nom}`);
            if (!reponse.ok){
                throw new Error(`Erreur ${reponse.status}`) 
            }
        const data = await reponse.json();



        console.log('Data = ', data )
        movieData= data;
        console.log(data.Search[1].Title)
        console.log(data.Search[0].Title)



    } catch (error) {
        console.error("Erreur:", error)
    }


    }
    
    
    async function main () {
        await getData();
        console.log("Titre du film 3:", movieData.Search[3].Title)

        for (let i = 0; i<10; i++){
            if (movieData.Search[i].Poster != null) {
        titre = document.createElement('h2');
        image = document.createElement('img');
        image.src = (movieData.Search[i].Poster);
        titre.textContent = (movieData.Search[i].Title);
        container.appendChild(titre);
        container.appendChild(image);
        }}

    }
    main();