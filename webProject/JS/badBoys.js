document.addEventListener('DOMContentLoaded', function () {
    const badBoysTrailerBtn = document.getElementById("bad-boys-trailer-btn");
    const badBoysBookNowButton = document.getElementById("bad-boys-book-now-form-trailer-btn");
    const movieName = localStorage.getItem("selectedMovie");
    const selectedMovieSpan = document.getElementById("selected-movie");
    const selectedMovieDropdown = document.getElementById("movie");

    // --- Full Trailer button ---
    if (badBoysTrailerBtn) {
        badBoysTrailerBtn.addEventListener('click', function () {
            window.open("https://youtu.be/hRFY_Fesa9Q?si=FQ1PbfZixEn1bTUh", '_blank');
        });
    }

    // --- Book Now button ---
    if (badBoysBookNowButton) {
        badBoysBookNowButton.addEventListener('click', function () {
            const movie = badBoysBookNowButton.getAttribute("data-movie");
            if (movie) {
                localStorage.setItem("selectedMovie", movie);
                window.location.href = "bookAMovie.html";
            }
        });
        
    }

    // --- On Book a Movie Page: Set movie title and auto-select in dropdown ---
    if (movieName && selectedMovieDropdown) {
        // Display movie name if span exists
        if (selectedMovieSpan) {
            selectedMovieSpan.textContent = movieName;
        }

        // Match and select the correct dropdown option
        for (let i = 0; i < selectedMovieDropdown.options.length; i++) {
            const option = selectedMovieDropdown.options[i];
            if (option.text.trim().toLowerCase() === movieName.trim().toLowerCase()) {
                selectedMovieDropdown.selectedIndex = i;
                break;
            }
        }
    }
});
