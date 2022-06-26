document.addEventListener ("DOMContentLoaded",
    function(event) {
        fetch('https://api.chucknorris.io/jokes/random', {
    })
    .then(res => res.json())
    .then(chucknorris => console.log(chucknorris))
    .catch(er => console.log(er));
})

document.addEventListener ("DOMContentLoaded",
    function(event) {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    })
    .then(res => res.json())
    .then(pokemon => console.log(pokemon))
    .catch(er => console.log(er));
})