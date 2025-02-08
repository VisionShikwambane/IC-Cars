import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LatestCarsComponent } from '../latest-cars/latest-cars.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeadlineComponent, LatestCarsComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
