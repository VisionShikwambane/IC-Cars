import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {


  teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      photo: '/assets/team/john.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Head of Sales',
      photo: '/assets/team/jane.jpg',
    },
    {
      name: 'Michael Johnson',
      role: 'Lead Mechanic',
      photo: '/assets/team/michael.jpg',
    },
  ];

}
