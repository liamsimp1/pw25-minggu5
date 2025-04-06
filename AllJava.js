function showModal() {
    document.getElementById("confirmationModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("confirmationModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function submitForm() {
    closeModal();
    document.getElementById("form").submit();
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
prevButton.addEventListener('click', () => showSlide(currentIndex - 1));

showSlide(currentIndex);
