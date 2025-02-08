import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, UserNavbarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
