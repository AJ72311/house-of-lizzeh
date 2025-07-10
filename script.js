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