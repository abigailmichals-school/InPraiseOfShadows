window.onload = () => {
    const transistion_el = document.querySelector('transistion');

    setTimeout(() => {
        transistion_el.classList.remove('is-active');
    }, 500);
}