//off canvas
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const offcanvas = document.querySelector('.offcanvas');

    menuBtn.addEventListener('click', function() {
        offcanvas.classList.toggle('active');
    });
});
//off canvas