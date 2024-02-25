document.addEventListener('DOMContentLoaded', function () {
    const sidebarContent = document.getElementById('discover_visit');
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const currentDate = new Date().toDateString();

    if (!lastVisitDate) {
        discover_visit.innerText = 'Welcome! Let us know if you have any questions.';
    } else {
        const daysDifference = Math.floor((Date.parse(currentDate) - Date.parse(lastVisitDate)) / (24 * 60 * 60 * 1000));

        if (daysDifference === 0) {
            discover_visit.innerText = 'Back so soon! Awesome!';
        } else {
            discover_visit.innerText = `It's been ${daysDifference} day(s) since your last visit. Welcome back!`;
        }
    }
    localStorage.setItem('lastVisitDate', currentDate);
});