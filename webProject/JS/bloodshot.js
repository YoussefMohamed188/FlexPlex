document.addEventListener('DOMContentLoaded', function () {
    const bloodshotTrailerBtn = document.getElementById("bloodshot-trailer-btn");
    const bloodshotBookNowButton = document.getElementById("bloodshot-book-now-form-trailer-btn");
    const movieName = localStorage.getItem("selectedMovie");
    const selectedMovieSpan = document.getElementById("selected-movie");
    const selectedMovieDropdown = document.getElementById("movie");

    // --- Full Trailer button ---
    if (bloodshotTrailerBtn) {
        bloodshotTrailerBtn.addEventListener('click', function () {
            window.open("https://youtu.be/vOUVVDWdXbo?si=fr_3BNo_3AGmaPb2", '_blank');
        });
    }

    // --- Book Now button ---
    if (bloodshotBookNowButton) {
        bloodshotBookNowButton.addEventListener('click', function () {
            const movie = bloodshotBookNowButton.getAttribute("data-movie");
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
