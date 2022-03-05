import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import 'firebase/auth';
import 'firebase/firestore'
import { CommonService } from 'src/app/@library/services/common.service';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { WindowService } from 'src/app/@library/services/window.service';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
var config = environment.firebase
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = this.fb.group({
    phoneNumber:['',Validators.required]
  })
  // phoneNumber = new FormControl('', Validators.required);
  phoneSignIn = false;
  windowRef: any;
  reChaptchaVerifier: any;
  isOTPSendedSuccessfully = false;
  otpIsVerifiedNow: boolean = false;

  constructor(
    private fb: FormBuilder,
    private windowService: WindowService,
    private loginService: LoginService,
    private snackBar:MatSnackBar) {
    this.windowRef = this.windowService.windowRef;
    this.loginService.isOTPVerified.subscribe((result) => {
      this.otpIsVerifiedNow = result
    })
  }

  getOtp() {
    console.log(this.form);
    if (this.form.valid) {
      this.reChaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
        size: 'invisible'
      }
      )
      firebase.auth().signInWithPhoneNumber(this.form.get('phoneNumber').value, this.reChaptchaVerifier).then((response: any) => {
        console.log(response);
        if (response) {
          this.form.reset()
          localStorage.setItem('verificationId', response.verificationId);
          this.isOTPSendedSuccessfully = true;
        }

      }).catch((err) => {
        this.snackBar.open(err.message,'Okay',{duration:2000})

      })
    }
  }

  ngOnInit() {
    firebase.initializeApp(config)
  }

}
