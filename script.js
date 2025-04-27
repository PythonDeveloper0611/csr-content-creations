// JavaScript for handling form submission and displaying summary

const form = document.querySelector('.video-form');
const summarySection = document.querySelector('#summary-section');
const summaryContent = document.querySelector('#summary-content');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const url = document.querySelector('#youtube-url').value;
    const language = document.querySelector('#language').value;

    // Placeholder for processing the YouTube URL (backend call here)
    fetchSummary(url, language);
});

function fetchSummary(url, language) {
    // Simulate API request and get summary
    setTimeout(() => {
        const fakeSummary = `This is a summary of the video at ${url}. The content is in ${language}.`;
        summaryContent.innerHTML = fakeSummary;
        summarySection.style.display = 'block';
    }, 1500);  // Simulating delay
}

// Download Summary as PDF (fake functionality)
function downloadSummary() {
    alert("Downloading summary as PDF...");
    // Add PDF generation code or redirect to a backend API
}
