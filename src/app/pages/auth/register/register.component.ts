import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
  })
  step0: any = true;
  step1: any = false;
  role:string = '1';
  step2: boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  takeCommonInfoOfUser(){
    console.log(this.form.value);
    localStorage.setItem("commonInfo",JSON.stringify(this.form.value))
    if(localStorage.getItem("commonInfo")){
      this.step0 = false;
      this.step1 = true;
    }
  }

  updateRole(){
    localStorage.setItem("role",this.role)
    if(localStorage.getItem("role"))
    this.step1 = false;
      this.step2 = true;
  }


}
