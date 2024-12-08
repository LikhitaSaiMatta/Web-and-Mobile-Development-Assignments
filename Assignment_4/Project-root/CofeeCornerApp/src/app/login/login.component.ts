import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  loginMessage = '';

  
  constructor(private router: Router) {}

  async login() {
      // Retrieve users from local storage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((user: any) => user.username.trim() === this.username.trim() && user.password === this.password);

      if (user) {
        alert(`Login successful! Welcome, ${user.username}.`);
        // Navigate to a specific page (e.g., home or dashboard)
        localStorage.setItem('accountType', 'storeManager');
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password.');
      }
    }
}
