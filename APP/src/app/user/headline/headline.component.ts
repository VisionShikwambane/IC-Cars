import { Component } from '@angular/core';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.css'
})
export class HeadlineComponent {

  priceRange: number = 100000;

  updatePrice(event: any) {
    this.priceRange = event.target.value;
  }

}
