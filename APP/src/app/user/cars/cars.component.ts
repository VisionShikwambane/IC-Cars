import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  imports: [CommonModule, FormsModule],
  templateUrl: './cars.component.html',
  standalone: true,
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  filtersVisible = false;


  filters = {
    make: '',
    model: '',
    year: '',
    price: '',
    bodyType: '',
    fuelType: '',
    transmission: '',
    mileage: '',
    condition: ''
  };

  makes = ["Toyota", "BMW", "Ford", "Mercedes", "Audi"];
  bodyTypes = ["Sedan", "SUV", "Hatchback", "Truck", "Coupe"];
  fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
  transmissions = ["Manual", "Automatic"];
  conditions = ["New", "Used", "Certified Pre-Owned"];

  cars = [
    { make: "Toyota", model: "Corolla", year: 2022, price: 350000, bodyType: "Sedan", fuelType: "Petrol", transmission: "Automatic", image: "car1.jpg" },
    { make: "BMW", model: "X5", year: 2020, price: 800000, bodyType: "SUV", fuelType: "Diesel", transmission: "Automatic", image: "car2.jpg" },
    { make: "Ford", model: "Mustang", year: 2019, price: 950000, bodyType: "Coupe", fuelType: "Petrol", transmission: "Manual", image: "car3.jpg" },
    { make: "Toyota", model: "Corolla", year: 2022, price: 350000, bodyType: "Sedan", fuelType: "Petrol", transmission: "Automatic", image: "car1.jpg" },
    { make: "BMssW", model: "X5", year: 2020, price: 800000, bodyType: "SUV", fuelType: "Diesel", transmission: "Automatic", image: "car2.jpg" },
    { make: "Forssd", model: "Mustang", year: 2019, price: 950000, bodyType: "Coupe", fuelType: "Petrol", transmission: "Manual", image: "car3.jpg" },
    { make: "Toyffota", model: "Corolla", year: 2022, price: 350000, bodyType: "Sedan", fuelType: "Petrol", transmission: "Automatic", image: "car1.jpg" },
    { make: "BM2W", model: "X5", year: 2020, price: 800000, bodyType: "SUV", fuelType: "Diesel", transmission: "Automatic", image: "car2.jpg" },
    { make: "Foddrd", model: "Mustang", year: 2019, price: 950000, bodyType: "Coupe", fuelType: "Petrol", transmission: "Manual", image: "car3.jpg" }
  ];

  currentPage = 1;
  carsPerPage = 9;
  get totalPagesArray() {
    return Array.from({ length: Math.ceil(this.cars.length / this.carsPerPage) }, (_, i) => i + 1);
  }

  get paginatedCars() {
    const startIndex = (this.currentPage - 1) * this.carsPerPage;
    return this.cars.slice(startIndex, startIndex + this.carsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  applyFilters() {
    console.log("Filters applied:", this.filters);
  }

  toggleFilters() {
    this.filtersVisible = !this.filtersVisible;
  }

}
