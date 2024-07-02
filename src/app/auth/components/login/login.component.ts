import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
