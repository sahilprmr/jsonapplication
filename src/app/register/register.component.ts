import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  genders = ['Female','Male'];
  constructor(private formbuilder: FormBuilder,   // for creating the Reactive form with controls
              private toastr : ToastrService,     // for the typical notification 
              private auth  : AuthService,
              private router : Router,
              ) { }

  registerForm = this.formbuilder.group({
    id: this.formbuilder.control('', Validators.compose([Validators.required, Validators.minLength(2)])),
    name: this.formbuilder.control('', Validators.required), //Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]')])
    email: this.formbuilder.control('', Validators.compose([Validators.email, Validators.required])),
    password: this.formbuilder.control('',Validators.required ),  //Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\d$#@!.&].{8,12}')])
    gender: this.formbuilder.control('male'),
    role: this.formbuilder.control(''),
    isActive: this.formbuilder.control(false)
  })

  registerByForm(){
    if(this.registerForm.valid){
            this.auth.registration(this.registerForm.value).subscribe(res=>{
      
            // console.log(res);

            this.toastr.success('Contact Admin For Activation','Registration Successfull!');
            this.router.navigate(['login']);
      });
      console.log(this.registerForm.value);
      
            
    }
    else{
            this.toastr.warning('Please...Enter Valid Data');
            
    }
  }

}
