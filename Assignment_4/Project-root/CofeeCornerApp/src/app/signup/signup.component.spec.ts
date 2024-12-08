import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [IonicModule.forRoot(), FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message for mismatched passwords', () => {
    component.password = 'password1';
    component.confirmPassword = 'password2';
    component.signup();
    expect(component.signupMessage).toContain('Passwords do not match');
  });

  it('should display success message on successful signup', async () => {
    component.username = 'testuser';
    component.password = 'password';
    component.confirmPassword = 'password';
    component.accountType = 'customer';
    await component.signup();
    expect(component.signupMessage).toContain('Signup successful');
  });
});

