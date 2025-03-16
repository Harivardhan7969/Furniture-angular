import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OfferbarComponent } from "../../offerbar/offerbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf, OfferbarComponent, FooterComponent, NavComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  indexs = [
    { name: 'Nikita Xing',
      description: 'CEO & Owner', 
       image: 'https://images.pexels.com/photos/5717550/pexels-photo-5717550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
       },
    { name: 'Harsh patel', 
      description: 'Lead Interior Designer',
       image: 'https://media.istockphoto.com/id/1616831320/photo/smiling-mature-latin-or-indian-businessman-holding-smartphone-in-office-middle-aged-manager.jpg?s=1024x1024&w=is&k=20&c=wroKcH_S-E4jrumWsVqMohM40b9K6bXeMqA3PlZPXdo=' 
      },
    { name: 'Sasha Grey',
      description: 'DIY Expert',
        image: 'https://media.istockphoto.com/id/2151670443/photo/focused-professional-man-smiling-at-smartphone-in-bright-modern-office.jpg?s=1024x1024&w=is&k=20&c=1XojFHMOwpnOME4o28ffs0MIFVbIM0zyDatvNccYKYk=' 
      },
    ]

}
