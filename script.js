function scrollView() {
    const viewportHeight = window.innerHeight;
    const currentScrollY = window.scrollY; // Or window.pageYOffset;
    const targetScrollY = currentScrollY + viewportHeight;

    window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
    });
}

document.getElementById("scrollArr").addEventListener("click", scrollView);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {            
            const imgChildren = entry.target.querySelectorAll('img');
            imgChildren.forEach(child => {
                child.classList.add('visible');
            });

            const divChildren = entry.target.querySelectorAll('div');
            divChildren.forEach(child => {
                child.classList.add('visible');
            });
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".scroll-animate").forEach(el => {
    observer.observe(el);
});