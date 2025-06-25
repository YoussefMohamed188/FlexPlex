const form = document.getElementById("formS");
const main = document.querySelector("#main");
const details = document.getElementById("formD");
const selectedMovie = document.getElementById("selected-movie");
const bookingTitle = document.querySelector(".booking-title-div h1");

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Change the title
  bookingTitle.textContent = "Booking Summary";
  
  Swal.fire({
    text: "Your booking has been confirmed.",
    icon: "success",
    confirmButtonColor: '#00b7ffc6',
  });

  main.style.display = "none";
  // {seat: 'Cairo', date: '2025-05-21', time: '12:00', seat-type: 'Standard'}
  details.innerHTML = ` 
  <h2>Details</h2>
    <p>Movie: ${selectedMovie.innerHTML}</p>
    <p>Branch: ${data['seat']}</p>
    <p>Tickets: ${data.date}</p>
    <p>Day: ${data.date}</p>
    <p>Seat Type: ${data['seat-type']}</p>
    <p>Time: ${data.time}</p>
    <p>Total Price: $${document.getElementById('total').innerText}</p>
   <div class="btns">
    <button onclick="pr()">Print</button>
    <button onclick="cancel()">Cancel</button>
    </div>
    `;
};

function pr() {
  window.print();
}

function cancel() {
  main.style.display = "block";
  bookingTitle.textContent = "Book Your Ticket"; // Reset the title
  location.reload();
}