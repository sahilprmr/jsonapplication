import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private formbuilder: FormBuilder,private toastr : ToastrService) { }

  registerForm = this.formbuilder.group({
    id: this.formbuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.formbuilder.control('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]')])),
    email: this.formbuilder.control('', Validators.compose([Validators.email, Validators.required])),
    password: this.formbuilder.control('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z\d$#@!.&].{8,12}')])),
    gender: this.formbuilder.control('male'),
    role: this.formbuilder.control('', Validators.required),
    isActive: this.formbuilder.control(false)
  })

  registerByForm(){
    if(this.registerForm.valid){

    }
    else{
            this.toastr.warning('Please...Enter Valid Data');
            
    }
  }

}
