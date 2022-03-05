import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from 'src/app/@library/services/common.service';
import { NgOtpInputModule } from  'ng-otp-input';
import { OtpInputComponent } from './otp-input/otp-input.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  // {path:'sign-up',component:RegisterComponent},
  {path: '**',redirectTo: 'login',component: LoginComponent},
]


@NgModule({
  declarations: [LoginComponent, RegisterComponent, OtpInputComponent, CustomStepperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
   FormsModule,
   NgOtpInputModule,
   ReactiveFormsModule,
   MatRadioModule,
   MatDatepickerModule,
   CdkStepperModule,
   MatStepperModule,
   MatNativeDateModule,
   MatSnackBarModule
  ]
})
export class AuthModule { }
