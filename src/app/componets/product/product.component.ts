import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgModel, ValueChangeEvent } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NavComponent, NgFor,RouterLink ,MatSliderModule, MatGridTile, MatRadioModule, MatGridList, MatButtonToggleGroup, MatButtonModule, FormsModule, MatButtonToggle, MatExpansionModule, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  

  imageUrl ='/assets/favourite.png';

  changeImage() {
    if (this.imageUrl === 'image1.jpg') {
      this.imageUrl = '/assets/favourite.png'; // change to second image
    } else {
      this.imageUrl = '/assets/love.png'; // change back to first image
    }
  }

value: any;
onChangeMartial() {
throw new Error('Method not implemented.');
}

  categories = [
    { name: 'Side Table',
       products: 320,
        image: '/assets/collect1.png'
       },
    { name: 'Arm Chair',
       products: 45,
        image: '/assets/collect2.png'
      },
    { name: 'Dinner Table',
       products: 120, 
       image: '/assets/collect3.png'
       },

    { name: 'Pillow',
       products: 150,
        image: 'https://images.pexels.com/photos/2290744/pexels-photo-2290744.jpeg?auto=compress&cs=tinysrgb&w=600'
       },
    { name: 'Wall Clock',
       products: 49, 
       image: 'https://images.pexels.com/photos/25189327/pexels-photo-25189327/free-photo-of-cupcakes-in-a-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
     },
     { name: 'Arm Chair',
             rate: 45,
              image: '/assets/7.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/5.png'
             },
             { name: 'Side Table',
             rate: 320,
              image: '/assets/8.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/9.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/10.png'
             },
             { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/5.png'
             },
             { name: 'Side Table',
             rate: 320,
              image: '/assets/11.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/collect3.png'
             },
  ];


  readonly panelOpenState = signal(false);

  formatLabel(value: number): string {
   if (value >= 1000) {
     return Math.round(value / 1000) + 'k';
   }

   return `${value}`;
 }

}

