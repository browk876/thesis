document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('year-slider');
    const events = document.querySelectorAll('.event');
    const selectedYearDisplay = document.getElementById('selected-year');

    function updateTimeline(year) {
        events.forEach(event => {
            const eventYear = event.getAttribute('data-year');
            if (eventYear === year.toString()) {
                event.style.display = 'block'; // Show the event
            } else {
                event.style.display = 'none'; // Hide the event
            }
        });
        selectedYearDisplay.textContent = year; 
    }

    updateTimeline(slider.value);

  
    slider.addEventListener('input', function() {
        updateTimeline(slider.value);
    });

   
    const buttons = document.querySelectorAll('.navigate-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const url = button.getAttribute('data-url');
            window.location.href = url; 
        });
    });
});
