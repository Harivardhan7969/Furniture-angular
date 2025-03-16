import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { FooterComponent } from "../footer/footer.component";
import { NgIf } from '@angular/common';
import { DetailsComponent } from "../details/details.component";
import { DiscoverComponent } from "../discover/discover.component";

@Component({
  selector: 'app-pdetails',
  standalone: true,
  imports: [NavComponent, MatTabGroup, MatTab, FooterComponent, NgIf, DetailsComponent, DiscoverComponent],
  templateUrl: './pdetails.component.html',
  styleUrl: './pdetails.component.css'
})
export class PdetailsComponent {

}
