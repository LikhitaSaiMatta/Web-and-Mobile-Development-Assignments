import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafesComponent } from './cafes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('CafesComponent', () => {
  let component: CafesComponent;
  let fixture: ComponentFixture<CafesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafesComponent],
      imports: [IonicModule.forRoot(), FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow customers to add a review', () => {
    component.accountType = 'customer';
    const initialReviews = component.cafes[0].reviews?.length || 0;
    component.newReview = 'Great coffee!';
    component.addReview(0);
    expect(component.cafes[0].reviews.length).toBe(initialReviews + 1);
  });
});