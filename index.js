let selectedSeats = [];
let selectedBusFare = 0;

function toggleSeat(seat) {
    seat.classList.toggle('selected');

    // Add/remove seat from selectedSeats array
    const seatName = seat.textContent;
    if (selectedSeats.includes(seatName)) {
        selectedSeats = selectedSeats.filter(seat => seat !== seatName);
    } else {
        selectedSeats.push(seatName);
    }

    updateFare();
}

function updateFare() {
    const farePerSeat = 100; // Assuming ₹100 per seat
    const totalFareFromSeats = selectedSeats.length * farePerSeat;

    // Total fare = fare from seats + selected bus fare
    const totalFare = totalFareFromSeats + selectedBusFare;

    // Display the total fare
    document.getElementById('fare').textContent = totalFare;
}



function selectBus(button) {
    // Get the fare of the selected bus
    selectedBusFare = parseInt(button.parentNode.getAttribute('data-fare'));

    // Highlight the selected bus
    const buses = document.querySelectorAll('.bus');
    buses.forEach(bus => bus.style.backgroundColor = '#f0f0f0');
    button.parentNode.style.backgroundColor = '#D4EDDA';

    // Update the fare display
    updateFare();
}


function confirmBooking() {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
    }

    const selectedBus = document.querySelector('.bus[style="background-color: rgb(212, 237, 218);"]');
    const busName = selectedBus ? selectedBus.querySelector('p').textContent : 'No bus selected';
    const travelDate = document.getElementById('travelDate').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;

    // Calculate total fare again in the confirmation
    const farePerSeat = 100;
    const totalFareFromSeats = selectedSeats.length * farePerSeat;
    const totalFare = totalFareFromSeats + selectedBusFare;

    alert(`Booking Confirmed!\n
    Bus: ${busName}\n
    Date: ${travelDate}\n
    From: ${source} To: ${destination}\n
    Seats: ${selectedSeats.join(', ')}\n
    Total Fare: ₹${totalFare}`);
}
