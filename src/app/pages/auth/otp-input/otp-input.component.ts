import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'
import firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss']
})
export class OtpInputComponent implements OnInit {
  otp: any;
  config = {
    allowNumberOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px,'
    }
  }
  verify: any;
  isOTPVerified: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.verify = localStorage.getItem('verificationId') || '{}'
  }

  verifyOtp() {
    var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify, this.otp)
    firebase.auth().signInWithCredential(credentials).then((response) => {
      console.log(response);
      localStorage.setItem("userDetailsFirebase", JSON.stringify(response))
      this.isOTPVerified = true;
      this.router.navigate(['/auth/sign-up'])
    })
  }
  onOtpChange(event: any) {
    console.log("otp event", event);
    this.otp = event;
  }

}
