const EditTime = document.getElementById("EditTime");
const tickets=document.getElementById("ticket")
const movies = document.getElementById("movie");
const ticketPrice = 50; 

const price=document.getElementById("price")
const dataForm = document.getElementById("form")

const details=document.getElementById("details")

  let now = new Date();
  let dateDay = now.toISOString().split("T")[0];
  let hours = now.getHours().toString();
  let minutes = now.getMinutes().toString();
  let time = `${hours}:${minutes}`;
  let va=''
function get(value){
va=value
}
dataForm.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(dataForm);
  const data = Object.fromEntries(formData.entries())
  console.log(data);
  
  details.innerHTML = ` 
  <h2 align="center">Booking Details</h2>
  <h2>Details</h2>
    <p>Name: ${data.your}</p>
    <p>Movie: ${va}</p>
    <p>Tickets: ${data.ticket}</p>
    <p>Date: ${dateDay}</p>
    <p>Time: ${time}</p>
    <p>Total Price: ${data.ticket * ticketPrice}$</p>
   <div class="btns">
    <button onclick="pr()">Print</button>
    <button onclick="cancel()">Cancel</button>
    </div>
    `;

dataForm.style.display='none'
}

function pr(){
  dataForm.style.display = "none"
  document.querySelector('.btns').style.display = "none"
  window.print()
}

function cancel(){
  dataForm.style.display = "flex"
  details.innerHTML = ""
  document.querySelector(".btns").style.display = "block"
}



function getTime() {


  EditTime.innerHTML = `
    <label for="date">Date:</label>
    <input type="date" id="date" value="${dateDay}" min="${dateDay}"> 
    <label for="time">Time:</label>
    <input type="time" id="time" value="${time}" min="${time}"> 
  `;
}
onload=()=>{getTime()}




function updatePrice() {
  if (movies.value == "") {
    price.innerHTML = `0`;
  } else {
    price.innerHTML = `${tickets.value * ticketPrice}$`;
  }
}


movies.onchange = updatePrice
tickets.oninput = updatePrice

dataForm.onmousemove=(e)=>{
  let x=e.clientX
  let y=e.clientY
  console.log(y);
  dataForm.style.cssText = `transform:translate(${x * 0.01}px,${
    y * 0.01
  }px);  box-shadow:${x*.02}px ${y*.01}px 10px 0px rgb(5 4 4 / 95%);
`;
  
}
const forms = document.getElementById("formS");
const selectedMovie = document.getElementById("selected-movie");
forms.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(forms);
  const data = Object.fromEntries(formData.entries());
  Swal.fire({
    text: "Your booking has been confirmed.",
    icon: "success",
  });
  setTimeout(() => {
    window.location.href = "./myBookings.html";
  }, 500);
  details.innerHTML = ` 
  <h2 align="center">Booking Details</h2>
  <h2>Details</h2>
    <p>Movie: ${selectedMovie}</p>
    <p>Branch: ${data["seat"]}</p>
    <p>Tickets: ${data.date}</p>
    <p>Day: ${data.date}</p>
    <p>Seat Type: ${data["seat-type"]}</p>
    <p>Time: ${data.time}</p>
    <p>Total Price: ${data.ticket * ticketPrice}$</p>
   <div class="btns">
    <button onclick="pr()">Print</button>
    <button onclick="cancel()">Cancel</button>
    </div>
    `;
};
