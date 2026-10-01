// Menggunakan Intersection Observer untuk efek scroll animasi yang elegan
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Berhenti memantau elemen setelah dianimasikan (agar animasi hanya 1x)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Mencari semua elemen yang memiliki class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));