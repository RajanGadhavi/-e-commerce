import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from "./about/about.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    template: `<router-outlet></router-outlet>`,
    imports: [RouterOutlet, HomeComponent, NavBarComponent, FooterComponent, AboutComponent]
})
export class AppComponent {
  title = 'e-commerce';
}
