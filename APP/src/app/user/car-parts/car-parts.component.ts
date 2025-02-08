import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-parts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-parts.component.html',
  styleUrl: './car-parts.component.css'
})
export class CarPartsComponent {


  carParts = [
    {
      name: 'Performance Car Battery',
      description: 'Long-lasting, high-performance battery for all car models.',
      image: '/car_battery.jpg',
    },
    {
      name: 'Premium Brake Pads',
      description: 'High-quality brake pads for better stopping power and safety.',
      image: '/brake_pads.jpg',
    },
    {
      name: 'Luxury Leather Seat Covers',
      description: 'Durable, stylish, and comfortable leather seat covers.',
      image: '/seat_cover.jpg',
    },
  ];

}
