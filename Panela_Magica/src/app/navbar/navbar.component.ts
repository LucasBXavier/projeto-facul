import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleOffcanvas(): void {
    const menuBtn = document.querySelector('#offcanvas-btn');
    const offcanvas = document.querySelector('#offcanvas');
    
    if (menuBtn && offcanvas) {
      menuBtn.classList.toggle('change');
      offcanvas.classList.toggle('active');
    }
  }
}
