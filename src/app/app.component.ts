import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfferbarComponent } from './componets/offerbar/offerbar.component';
import { FooterComponent } from "./componets/footer/footer.component";
import { AboutComponent } from "./componets/About/about/about.component";

import { HomeComponent } from './componets/home/home.component';

import { ProductComponent } from './componets/product/product.component';
import { PdetailsComponent } from "./componets/pdetails/pdetails.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OfferbarComponent, HomeComponent, FooterComponent, AboutComponent, ProductComponent, PdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientside';
}
