import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  toggleofcanvas(): void {
    const menuBtn = document.querySelector('#ofcanvas-btn');
    const ofcanvas = document.querySelector('#ofcanvas');

    if (menuBtn && ofcanvas) {
      menuBtn.classList.toggle('change');
      ofcanvas.classList.toggle('active');
    }
  }
}
