import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {


  constructor(private cdr: ChangeDetectorRef) {}
  
  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
