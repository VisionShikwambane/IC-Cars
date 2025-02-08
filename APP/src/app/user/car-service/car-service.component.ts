import { Component } from '@angular/core';

@Component({
  selector: 'app-car-service',
  standalone: true,
  imports: [],
  templateUrl: './car-service.component.html',
  styleUrl: './car-service.component.css'
})
export class CarServiceComponent {


  carServices = [
    {
      name: 'Oil Change',
      description: 'Ensure smooth engine performance with a professional oil change.',
      image: '/assets/services/oil-change.jpg',
    },
    {
      name: 'Brake Inspection',
      description: 'Improve safety with a full brake system check and servicing.',
      image: '/assets/services/brake-service.jpg',
    },
    {
      name: 'Tire Replacement',
      description: 'Get high-performance tires fitted for maximum road grip.',
      image: '/assets/services/tire-replacement.jpg',
    },
    {
      name: 'Battery Check',
      description: 'Ensure your car starts every time with a complete battery inspection.',
      image: '/assets/services/battery-check.jpg',
    },
    {
      name: 'Engine Diagnostics',
      description: 'Identify and resolve engine issues with advanced diagnostics.',
      image: '/assets/services/engine-diagnostics.jpg',
    },
    {
      name: 'Car Detailing',
      description: 'Give your vehicle a fresh look with full interior and exterior detailing.',
      image: '/assets/services/car-detailing.jpg',
    },
  ];  

}
