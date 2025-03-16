import { AfterViewInit, Component, ElementRef, ViewChild  } from '@angular/core';
import { OfferbarComponent } from '../offerbar/offerbar.component';
import {MatTabGroup,MatTab} from '@angular/material/tabs';

import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";
import { TrendingComponent } from "../trending/trending/trending.component";
import { FeaturesComponent } from "../features/features.component";
import { NgFor, NgIf } from '@angular/common';
import { DiscoverComponent } from '../discover/discover.component';
import { RouterLink } from '@angular/router';
interface Product {
  name: string;
  rate: number;
  image: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf,NgFor, MatTabGroup,MatTab,RouterLink, OfferbarComponent,FooterComponent, DiscoverComponent, NavComponent, TrendingComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
[x: string]: any;
  date: any;
  now: any;
  targetDate: any = new Date(2025, 5, 11);
  targetTime: any = this.targetDate.getTime();
  difference: number | undefined;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days', { static: true })
  days!: ElementRef;
  @ViewChild('hours', { static: true })
  hours!: ElementRef;
  @ViewChild('minutes', { static: true })
  minutes!: ElementRef;
  @ViewChild('seconds', { static: true })
  seconds!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24 *60);

      !isNaN(this.hours.nativeElement.innerText)
        ? (this.hours.nativeElement.innerText = Math.floor(this.difference))
        : (this.hours.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();

    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }



  faqs = [
    {
      question: 'How do I choose the right furniture for my space?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      showAnswer: false,
    },
    {
      question: 'What materials are your furniture items made of?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".',
      showAnswer: false,
    },
    {
      question: 'What is your delivery process?',
      answer:
        'We offer white-glove delivery service for most furniture items, which includes professional assembly and placement in your desired room. Delivery times may vary depending on your location and product availability. You will be contacted to schedule a delivery appointment once your order is ready to ship.',
      showAnswer: false,
    },
    {
      question: 'What is your return and exchange policy?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".',
      showAnswer: false,
    },
    {
      question: 'How can I contact customer support for assistance?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      showAnswer: false,
    },
  ];

  toggleAnswer(index: number): void {
    this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
  }



      

      rooms: string[] = ['Bed Room', 'Living Room'];
      selectedRoom: string = 'Bed Room';
     
      product: { [key: string]: Product[] } = {
        'Bed Room':  [
          { name: 'Side Table',
            rate:11,
              image: '/assets/1.png'
             },
          { name: 'Arm Chair',
            rate:66,
              image: '/assets/2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/3.png'
             },
      
             { name: 'Side Table',
             rate: 320,
              image: '/assets/4.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/collect3.png'
             },
             { name: 'Side Table',
             rate: 320,
              image: '/assets/collect1.png'
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
              image: '/assets/collect1.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/collect3.png'
             },
            ]
      ,
        'Living Room':  [
          { name: 'Side Table',
             rate: 320,
              image: '/assets/collect1.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/collect3.png'
             },
      
             { name: 'Side Table',
             rate: 320,
              image: '/assets/collect1.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },  { name: 'Side Table',
            rate:11,
              image: '/assets/1.png'
             },
          { name: 'Arm Chair',
            rate:66,
              image: '/assets/2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/3.png'
             },
      
             { name: 'Side Table',
             rate: 320,
              image: '/assets/4.png'
             },
          { name: 'Arm Chair',
             rate: 45,
              image: '/assets/collect2.png'
            },
          { name: 'Dinner Table',
             rate: 120, 
             image: '/assets/collect3.png'
             },
             { name: 'Side Table',
             rate: 320,
              image: '/assets/collect1.png'
             }
            ]
      
        
      };
     
      selectRoom(room: string): void {
        this.selectedRoom = room;
      }
  

   
    
}



