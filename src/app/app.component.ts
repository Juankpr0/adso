import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HeaderComponent } from "./header/header.component";
import { ArticuloComponent } from "./articulo/articulo.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PadreComponent, HeaderComponent, ArticuloComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase';
  nombre = 'Juank';
}

