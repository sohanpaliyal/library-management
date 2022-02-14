import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './auth/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProgressLoaderComponent } from './components/progress-loader/progress-loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    // LoginComponent
  
    ProgressLoaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule

  ],
  exports:[
    // LoginComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ProgressLoaderComponent,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
