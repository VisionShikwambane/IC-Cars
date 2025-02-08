import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.css'
})
export class HeadlineComponent {

  dropdownOpen: { [key in 'make' | 'type' | 'variant' | 'price']: boolean } = {
    make: false,
    type: false,
    variant: false,
    price: false
  };

  selectedMake: string | null = null;
  selectedType: string | null = null;
  selectedVariant: string | null = null;
  selectedPrice: string | null = null;

  makes = ["Mercedes", "Audi", "Bentley", "Rolls-Royce", "Lamborghini"];
  types = ["SUV", "Sedan", "Coupe", "Convertible", "Hatchback"];
  variants = ["Petrol", "Diesel", "Hybrid", "Electric"];
  priceRanges = [
    "R0 - R100,000",
    "R100,001 - R250,000",
    "R250,001 - R500,000",
    "R500,001 - R750,000",
    "R750,001 - R1,000,000",
    "R1,000,001 - R1,500,000",
    "R1,500,001 - R2,000,000",
    "R2,000,001 - R3,000,000",
    "R3,000,001 - R5,000,000",
    "Above R5,000,000"
  ];

  toggleDropdown(menu: 'make' | 'type' | 'variant' | 'price') {
    this.dropdownOpen[menu] = !this.dropdownOpen[menu];
  }

  selectMake(make: string) {
    this.selectedMake = make;
    this.dropdownOpen.make = false;
  }

  selectType(type: string) {
    this.selectedType = type;
    this.dropdownOpen.type = false;
  }

  selectVariant(variant: string) {
    this.selectedVariant = variant;
    this.dropdownOpen.variant = false;
  }

  selectPrice(price: string) {
    this.selectedPrice = price;
    this.dropdownOpen.price = false;
  }

}
