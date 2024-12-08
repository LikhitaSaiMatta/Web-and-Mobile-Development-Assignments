import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  imports: [IonicModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent  implements OnInit {
  accountType = '';

  constructor(private router: Router) { 
    this.updateAccountType();
    window.addEventListener('storage', this.updateAccountType.bind(this));
  }

  updateAccountType() {
    this.accountType = localStorage.getItem('accountType') || '';
  }

  ngOnInit() {}

  navigateToCafes() {
    this.router.navigate(['/cafes']);
  }

  navigateToCafeManager() {
    this.updateAccountType();
    if (this.accountType === 'storeManager') {
      this.router.navigate(['/cafes']);
    } else {
      alert('You must be logged in as a store manager to add cafes.');
    }
  }

  ngOnDestroy() {
    window.removeEventListener('storage', this.updateAccountType.bind(this)); // Cleanup event listener
  }

}
