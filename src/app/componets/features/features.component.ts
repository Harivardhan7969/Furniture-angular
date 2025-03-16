import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef<HTMLDivElement>;

  reddys = [
    { fullname: 'Product 1',
       image: '/assets/c1.avif'},
    { fullname: 'Product 2',
       image: '/assets/c2.jfif'},
    { fullname: 'Product 3',
       image: 'https://images.pexels.com/photos/4210315/pexels-photo-4210315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
       },
    { fullname: 'Product 4',
       image:'/assets/c3.jfif'},
    { fullname: 'Product 5',
       image: 'https://images.pexels.com/photos/6123302/pexels-photo-6123302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
       },
    { fullname: 'Product 6',
       image: '/assets/c4.jfif'  },
    { fullname: 'Product 7',
      image: 'https://images.pexels.com/photos/6123302/pexels-photo-6123302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
    },
    { fullname: 'Product 8',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
     },
    { fullname: 'Product 9',
      image: 'https://images.pexels.com/photos/4210315/pexels-photo-4210315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
     },
    { fullname: 'Product 10',
      image: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
     },
  ];


  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
