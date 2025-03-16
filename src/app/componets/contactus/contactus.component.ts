import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

}
