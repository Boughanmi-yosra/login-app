import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; // Adjust the path as needed

@Component({
  selector: 'app-root',
  imports: [ LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-app';
}
