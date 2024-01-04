const openCv = document.getElementById('openCv');

function handleCvBtn() {
    const openLink = 'pdf-files/CV-Front-End-Anna-Makarova.pdf';
    window.open(openLink, '_blank');
}
openCv.addEventListener('click', handleCvBtn);
