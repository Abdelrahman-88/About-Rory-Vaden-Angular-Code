import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = new FormGroup({
    "email": new FormControl(null, [Validators.email,Validators.required])
  })

  submitSignUpForm(signUpForm:FormGroup){
    if(signUpForm.valid){
      signUpForm.reset();
      this.toastr.success(`Signup successfully`, "", { positionClass: 'toast-bottom-right', timeOut: 5000 });

    }
    else{
      this.toastr.error(`Error invalid email`, "", { positionClass: 'toast-bottom-right', timeOut: 5000 });
    }
    
  }

}
