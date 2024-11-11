Add the following JavaScript code to your existing script.js file:

// Function to move the slider
function moveSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const slides = slider.children

Populate days based on selected month
function populateDays() {
    const monthSelect = document.getElementById('month-select');
    const daySelect = document.getElementById('day-select');
    
    const month = monthSelect.value;
    
    // Clear existing options in the day dropdown
    daySelect.innerHTML = '';

    // Get number of days in the selected month
    const daysInMonth = new Date(2023, parseInt(month) + 1, 0).getDate(); // Using year 2023 as an example
    
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }
}

// Event listener to populate days when month changes
document.getElementById('month-select').addEventListener('change', populateDays);

// Initialize the days for the first month on load
populateDays();

