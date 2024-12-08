import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cafes',
  standalone: true, // Mark as standalone
  imports: [IonicModule, CommonModule, FormsModule], // Add IonicModule here
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.scss'],
})
export class CafesComponent implements OnInit {
  cafes = JSON.parse(localStorage.getItem('cafes') || '[]');
  accountType = '';
  newReview = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateAccountType();
    this.cdr.detectChanges();
  }

  updateAccountType() {
    this.accountType = (localStorage.getItem('accountType') || 'customer').trim();
    this.cdr.detectChanges();
  }

  addCafe(name: string, address: string, image: string) {
    if (this.accountType === 'storeManager') {
      this.cafes.push({ name, address, image });
    } else {
      alert('Only store managers can add cafes.');
    }
  }

  addReview(index: number) {
    if (this.accountType === 'customer' && this.newReview.trim() !== '') {
      this.cafes[index].reviews = this.cafes[index].reviews || [];
      this.cafes[index].reviews.push(this.newReview);
      localStorage.setItem('cafes', JSON.stringify(this.cafes));
      this.newReview = '';
      this.cdr.detectChanges(); 
    } else {
      alert('Only customers can add reviews or review text cannot be empty.');
    }
  }

  deleteCafe(index: number) {
    if (this.accountType === 'storeManager') {
      this.cafes.splice(index, 1);
    } else {
      alert('Only store managers can delete cafes.');
    }
  }
}
