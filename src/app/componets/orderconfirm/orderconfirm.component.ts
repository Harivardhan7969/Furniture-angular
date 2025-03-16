import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-orderconfirm',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './orderconfirm.component.html',
  styleUrl: './orderconfirm.component.css'
})
export class OrderconfirmComponent {

}
