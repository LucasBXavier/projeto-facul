import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Panela_Magica';
  import={
    NavbarComponent,
    CarrosselComponent,
    CardsComponent,
    FooterComponent
  }
}
