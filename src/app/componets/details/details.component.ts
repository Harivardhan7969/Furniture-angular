import { Component } from '@angular/core';
import { DiscoverComponent } from "../discover/discover.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DiscoverComponent,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
