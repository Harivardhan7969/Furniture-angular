import { Component } from '@angular/core';
import { OfferbarComponent } from "../offerbar/offerbar.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [OfferbarComponent, NavComponent, FooterComponent,RouterLink],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent {

  counter = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }

}
