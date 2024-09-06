const homeBtn =document.querySelector(".logo");
homeBtn.addEventListener('click',()=>{
    window.location.href = "index.html";
})

const dashboard =document.querySelector(".dashboard");
dashboard.style.display='none';


document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
        const signUpLink = document.getElementById('signUp');
        dashboard.style.display='flex';
        signUpLink.textContent = 'Logout';
        signUpLink.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = "login.html";
        });
    }
});



function toggleMenu() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}