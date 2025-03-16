import { Component } from '@angular/core';
import { OfferbarComponent } from '../offerbar/offerbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [OfferbarComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
