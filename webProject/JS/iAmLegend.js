document.addEventListener('DOMContentLoaded', function () {
    const iAmLegendTrailerBtn = document.getElementById("i-am-legend-tailer-btn");
    const iAmLegendBookNowButton = document.getElementById("i-am-legend-book-now-form-trailer-btn");
    const movieName = localStorage.getItem("selectedMovie");
    const selectedMovieSpan = document.getElementById("selected-movie");
    const selectedMovieDropdown = document.getElementById("movie");

    // --- Full Trailer button ---
    if (iAmLegendTrailerBtn) {
        iAmLegendTrailerBtn.addEventListener('click', function () {
            window.open("https://youtu.be/dtKMEAXyPkg?si=TFsbehsvsyse4rFo", '_blank');
        });
    }

    // --- Book Now button ---
    if (iAmLegendBookNowButton) {
        iAmLegendBookNowButton.addEventListener('click', function () {
            const movie = iAmLegendBookNowButton.getAttribute("data-movie");
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
