
function removeSection() {
    // Code to remove the section
    document.getElementById('announcementSection').style.display = 'none';

    // Code to store the removal state (using localStorage)
    localStorage.setItem('sectionRemoved', 'true');
}

function callNumber(phoneNumber) {
    // Code to initiate a phone call
    window.location.href = 'tel:' + phoneNumber;
}

// Check if the section should be removed
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('sectionRemoved') === 'none') {
        document.getElementById('announcementSection').style.display = 'none';
    }
});
