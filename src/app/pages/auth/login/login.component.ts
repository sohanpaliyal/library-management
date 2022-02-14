import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import 'firebase/auth';
import 'firebase/firestore'
import { CommonService } from 'src/app/@library/services/common.service';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
// import 'firbase?'
var config = environment.firebase
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {
  phoneNumber:string ='';
  otp:string = '';
  phoneSignIn = false;
  windowRef:any;
  reChaptchaVerifier:any;
  disableOTPSendButton = true;
  // form = this.fb.group({
  //   email:[''],
  //   password:['']
  // })
  

  
  // items:Observable<any>
  constructor(
    private fb:FormBuilder,
    private commonService:CommonService) {
      this.windowRef = this.commonService.windowRef;
    // this.items = db.list('items').valueChanges()

//     const auth = getAuth();
// auth.languageCode = 'it';
   }

toggleSingIn(){
  this.phoneSignIn =!this.toggleSingIn
}
getOtp(){
  this.reChaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha',{
    size:'invisible'   
  }
  )
  firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.reChaptchaVerifier).then((response:any)=>{
    console.log(response);
    
  }).catch((err)=>{
    alert(err.message)
  })
}
verifyOtp(){

}
  ngOnInit() {
    
    firebase.initializeApp(config)
    
  }
ngAfterViewInit(){
  // this.windowRef.recaptchaVerifier = new auth.recaptchaVerifier('recaptcha-container',{
  //   size:'normal',
  //   callback: (response:any) =>{
  //     this.disableOTPSendButton = false;
  //   }
  // })
  // this.windowRef.recaptchaVerifier.render()
}

  submit(){
    // this.db.list('items').push({content:this.form.value})
  }
}
