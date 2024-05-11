import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

const menuBtn = document.querySelector('.offcanvas-btn') //as HTMLElement | null;
const offcanvas = document.querySelector('.offcanvas') //as HTMLElement | null;

function toggleOffcanvas() {
    if (menuBtn && offcanvas) {
        menuBtn.classList.toggle('change');
        offcanvas.classList.toggle('active');
    }
}

if (menuBtn) {
    menuBtn.addEventListener('click', toggleOffcanvas);
}

