const apikey = "faef8cac"

console.log("bonjour");
let film = document.getElementById("search").value

getData ();
async function getData() {
    try{
        
        console.log(film)
        const reponse = await fetch(`https://omdbapi.com/?apikey=${apikey}&s=${film}`);
        const data = await reponse.json()
        console.log(data.Search(0).Title)
      
    } catch (error) {
        console.error("Erreur:", error)
    }
    
    
}
