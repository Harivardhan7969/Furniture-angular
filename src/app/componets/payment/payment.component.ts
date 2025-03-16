import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NavComponent, FooterComponent,RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
