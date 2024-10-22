document.getElementById('appointment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    alert(`Appointment booked for ${name} on ${date} at ${time}.`);
    document.getElementById('cancel-appointment').style.display = 'inline';
    this.reset();
});

document.getElementById('cancel-appointment').addEventListener('click', function () {
    alert('Appointment canceled.');
    this.style.display = 'none';
});
