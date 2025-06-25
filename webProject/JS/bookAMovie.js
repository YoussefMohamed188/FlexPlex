// JavaScript to handle seat selection and price calculation
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        
        updateSelectedCount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const selectedMovieSpan = document.getElementById('selected-movie');
    const selectedMovieDropdown = document.getElementById('movie');
    const movieName = localStorage.getItem('selectedMovie');

    if (movieName && selectedMovieSpan) {
        selectedMovieSpan.textContent = movieName;
        // Optionally select the movie in the dropdown
        for (let i = 0; i < selectedMovieDropdown.options.length; i++) {
            if (selectedMovieDropdown.options[i].text.toLowerCase().includes(movieName.toLowerCase())) {
                selectedMovieDropdown.selectedIndex = i;
                break;
            }
        }
    }
});