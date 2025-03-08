let pages = document.querySelectorAll('.page');
let currentIndex = 0;

function changePage() {
    pages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % pages.length;
    pages[currentIndex].classList.add('active');
}

pages[currentIndex].classList.add('active');

let nextButton = document.getElementById('nextBtn');
nextButton.addEventListener('click', changePage);
