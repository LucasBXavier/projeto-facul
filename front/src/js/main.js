document.getElementById("year").innerHTML = new Date().getFullYear();



//off canvas
// document.addEventListener('DOMContentLoaded', function() {
//     const menuBtn = document.querySelector('.offcanvas-btn');
//     const offcanvas = document.querySelector('.offcanvas');

//     menuBtn.addEventListener('click', function() {
//         offcanvas.classList.toggle('active');
//     });  
// });

const menuBtn = document.querySelector('.offcanvas-btn');
const offcanvas = document.querySelector('.offcanvas');

function Function(menuBtn) {
    menuBtn.classList.toggle('change');
    offcanvas.classList.toggle('active');
}

menuBtn.addEventListener('click', Function);

//off canvas