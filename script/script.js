
function loadProject(filename) {
    const buttons = document.querySelectorAll('.timeline button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById('project-display').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('project-display').innerHTML = "<p>Error loading content.</p>";
        });
}

// Load project1.html when page loads
window.addEventListener('DOMContentLoaded', () => {
    loadProject('project1.html');
});

function loadCertificate(filename, element) {
    const buttons = document.querySelectorAll('.timeline button');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    document.getElementById('cert-display').innerHTML = `<img src="${filename}" style="max-width:100%; height:auto;" alt="Certificate Image"/>`;
}
