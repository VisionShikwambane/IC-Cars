import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-cars.component.html',
  styleUrl: './latest-cars.component.css'
})
export class LatestCarsComponent {


  latestCars = [
    {
      name: 'Mercedes-Benz AMG GT',
      description: 'A high-performance coupe with a luxurious feel.',
      price: 3500000,
      image: '/car1.jpg',
    },
    {
      name: 'Audi R8 V10',
      description: 'An iconic supercar with a powerful V10 engine.',
      price: 2800000,
      image: '/car2.jpg',
    },
    {
      name: 'Lamborghini Huracán',
      description: 'A stylish and aggressive supercar with unmatched speed.',
      price: 4500000,
      image: '/car3.jpg',
    },
    {
      name: 'Rolls-Royce Ghost',
      description: 'The pinnacle of luxury with handcrafted perfection.',
      price: 6200000,
      image: '/car3.jpg',
    },
    {
      name: 'Bentley Continental GT',
      description: 'A grand tourer with elegance and raw power.',
      price: 3700000,
      image: '/car1.jpg',
    },
    {
      name: 'Porsche 911 Turbo S',
      description: 'A blend of sports car agility and daily comfort.',
      price: 3200000,
      image: '/car2.jpg',
    },
  ];

}
