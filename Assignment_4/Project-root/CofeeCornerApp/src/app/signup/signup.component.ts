import { Component } from '@angular/core';
import axios from 'axios';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username = '';
  password = '';
  confirmPassword = '';
  accountType = '';
  signupMessage = '';

  constructor (private router: Router) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      this.signupMessage = 'Passwords do not match.';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

      users.push({ username: this.username, password: this.password, accountType: this.accountType });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created successfully!');
      setTimeout(() => {
        this.router.navigate(['/login']); // Navigate to login page
      }, 500);
    }
}

