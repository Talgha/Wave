// General JavaScript File (can be expanded)

document.addEventListener('DOMContentLoaded', () => {
    console.log("FuturaWave Portal Initialized");

    // Example: Smooth scrolling for anchor links (if you add any)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    // Add active class logic for navigation (basic example)
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage) {
        document.querySelectorAll('nav ul li a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                 link.classList.remove('active'); // Ensure only one is active
            }
        });
         // Special case for root (index.html)
        if (currentPage === '' || currentPage === 'index.html') {
             const mapLink = document.querySelector('nav ul li a[href="index.html"]');
             if(mapLink) {
                 // Remove active from others first
                 document.querySelectorAll('nav ul li a.active').forEach(l => l.classList.remove('active'));
                 mapLink.classList.add('active');
             }
        }
    } else {
         // Default to map link if path is empty
         const mapLink = document.querySelector('nav ul li a[href="index.html"]');
         if(mapLink) mapLink.classList.add('active');
    }


    // --- Placeholder functions for API calls would go here or in page-specific scripts ---
    // See examples within the HTML files for how to structure these calls
});

// --- Map Initialization (needs to be called correctly) ---
// The initMap function is defined in index.html and called via the Google Maps API script callback
// If you move it here, ensure the Google Maps API script is loaded *before* this script runs
// and remove the callback parameter from the API URL.
/*
function initMap() {
    // Map initialization code (as in index.html)
    // ...
}
// If moved here, potentially call like this:
// window.initMap = initMap; // Make it globally accessible if needed by Google callback
// OR load the Google Maps script dynamically and then call initMap
*/
