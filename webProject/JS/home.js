document.addEventListener('DOMContentLoaded', function(){
    const badBoysButton = document.getElementById('bad-boys-btn');
    const iAmLegendButton = document.getElementById('i-am-legend-btn');
    const bloodshotButton = document.getElementById('bloodshot-btn');
    const intereptorButton = document.getElementById('interceptor-btn');
    const selectedMovie = document.getElementById('selected-movie');
    const bookButtons = document.querySelectorAll("button[data-movie]");
    const menuItems = document.querySelectorAll(".navigation-items li a");
    
    badBoysButton.addEventListener('click' , function(){
        window.location.href = "bookAMovie.html";
        localStorage.setItem('selectedMovie', ' BAD BOYS');
        selectedMovie.innerText = "BAD BOYS";
    });
    iAmLegendButton.addEventListener('click' , function(){
        window.location.href = "bookAMovie.html";
        localStorage.setItem('selectedMovie', ' I AM LEGEND');
        selectedMovie.innerText = "I AM LEGEND";
    });
    bloodshotButton.addEventListener('click' , function(){
        window.location.href = "bookAMovie.html";
        localStorage.setItem('selectedMovie', ' BLOODSHOT');
        selectedMovie.innerText = "BLOODSHOT";
    });
    intereptorButton.addEventListener('click' , function(){
        window.location.href = "bookAMovie.html";
        localStorage.setItem('selectedMovie', ' INTERCEPTOR');
        selectedMovie.innerText = "INTERCEPTOR";
    });
    
    bookButtons.forEach(button => {
        button.addEventListener("click", () => {
            const movieName = button.getAttribute("data-movie");

            // Save the selected movie name to localStorage
            localStorage.setItem("selectedMovie", movieName);

            // Redirect to bookAMovie.html
            window.location.href = "bookAMovie.html";
        });
    });
    
});