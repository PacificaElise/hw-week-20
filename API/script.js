document.addEventListener ("DOMContentLoaded",
    function(event) {
        fetch('https://api.github.com/users/PacificaElise', {
        })
    .then(res => res.json())
    .then(
        user => {console.log(user);
        document.getElementById("avatar").src = user.avatar_url;
        document.getElementById("username").innerText = user.name;
        document.getElementById('projects').href = user.repos_url;
        document.getElementById("email").innerText = user.blog;
        document.getElementById("location").innerText = user.location;
        document.getElementById('gitlink').href = user.html_url;

    })
    .catch(er => console.log(er));
})



