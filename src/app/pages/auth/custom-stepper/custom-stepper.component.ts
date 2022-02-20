import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss']
})
export class CustomStepperComponent implements OnInit {
  role:number = 1;
  roleArr = ['User','Owner']
  form = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
   
    address:['',Validators.required],
    purpose:['',Validators.required],
    dob:['',Validators.required],
    photoId:['',Validators.required],
  })
  isEditable = false;
  photos:any = [];
  images: any = [];
  constructor(private fb: FormBuilder) { 
    console.log(this.form.value);
    
  }

  ngOnInit(): void {
   
  }
  removeImage(index:number) {
    console.log("remove button triggered");

    this.photos.splice(index, 1);
  }

  readImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.photos.push({
          file: file,
          imageUrl: event.target.result 
        });
      }
    }
  }


  radioChange(event:any){
    console.log('hello there',event.value);
    if(event.value === 1){
      this.form.removeControl('libraryName');
      this.form.removeControl('location');
      this.form.removeControl('capacity');
      this.form.removeControl('mobileNumber');
      this.form.removeControl('ownersId');

      this.form.addControl('photoId', new FormControl('', Validators.required));
      this.form.addControl('dob', new FormControl('', Validators.required));
      this.form.addControl('purpose', new FormControl('', Validators.required));
    }else{
      this.form.removeControl('photoId');
      this.form.removeControl('dob');
      this.form.removeControl('purpose');

      this.form.addControl('libraryName', new FormControl('', Validators.required));
      this.form.addControl('location', new FormControl('', Validators.required));
      this.form.addControl('capacity', new FormControl('', Validators.required));
      this.form.addControl('mobileNumber', new FormControl('', Validators.required));
      this.form.addControl('ownersId', new FormControl('', Validators.required));
    } 
    console.log(this.form.value);
    
  }
}
