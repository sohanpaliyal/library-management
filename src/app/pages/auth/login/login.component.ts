import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import 'firebase/auth';
import 'firebase/firestore'
import { CommonService } from 'src/app/@library/services/common.service';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { WindowService } from 'src/app/@library/services/window.service';
var config = environment.firebase
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phoneNumber:string ='';
  phoneSignIn = false;
  windowRef:any;
  reChaptchaVerifier:any;
  isOTPSendedSuccessfully = false;
  
  constructor(
    private fb:FormBuilder,
    private windowService:WindowService) {
      this.windowRef = this.windowService.windowRef;
  
   }

getOtp(){
  this.reChaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha',{
    size:'invisible'   
  }
  )
  firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.reChaptchaVerifier).then((response:any)=>{
    console.log(response);
    if(response){
      this.phoneNumber = ''
      localStorage.setItem('verificationId',response.verificationId);
      this.isOTPSendedSuccessfully = true;
    }

  }).catch((err)=>{
    alert(err.message)

  })
}

  ngOnInit() {
    firebase.initializeApp(config)
  }

  submit(){
    // this.db.list('items').push({content:this.form.value})
  }
}
