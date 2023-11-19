let selectedDateTime;

function checkAvailability() {
  selectedDateTime = document.getElementById('datetime').value;


  const availability = true;

  displayAvailabilityMessage(availability);
}

function displayAvailabilityMessage(availability) {
  const messageElement = document.getElementById('availabilityMessage');
  messageElement.textContent = availability ? 'Available! You can proceed with the reservation.' : 'Sorry, not available at this time.';
  messageElement.style.color = availability ? 'green' : 'red';
}

function confirmReservation() {
  if (selectedDateTime) {

    let reservation = (` ${selectedDateTime}`);

 document.getElementById("reservedDate&TIme").innerHTML = reservation;
 document.getElementById("profile").style.display = "block";
 document.getElementById("project-container").style.display = "none";

  
  } else {
    alert('Please choose a date and time first.');
  }
}

