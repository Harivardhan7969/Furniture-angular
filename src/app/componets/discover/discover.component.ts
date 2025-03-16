import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [NgFor],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {

  chairs = [
    {
      name: 'Nova Nest Chair',
      price: 180.99,
      originalPrice: 200.99,
      discount: 20,
      image: '/assets/6.png'
    },
    {
      name: 'Zenith Zephyr Chair',
      price: 235.99,
      originalPrice: 255.99,
      discount: 25,
      image: '/assets/3.png'
    },
    {
      name: 'Arm Serenade Chair',
      price: 333.99,
      originalPrice: 345.99,
      discount: 20,
      image: '/assets/8.png'
    },
    {
      name: 'Radiance Relax Chair',
      price: 235.99,
      originalPrice: 245.99,
      discount: 15,
      image: '/assets/9.png'
    },
   
    {
      name: 'Nova Nest Chair',
      price: 180.99,
      originalPrice: 200.99,
      discount: 20,
      image: '/assets/collect2.png'
    },

    { name: 'Arm Chair',
             rate: 45,
              image: '/assets/2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/5.png'
             },
             { name: 'Side Table',
             rate: 320,
              image: '/assets/3.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/4.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/11.png'
             },
  ];
}
 


