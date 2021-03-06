import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Register } from './register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public _userService:UserService) { }
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
      title: [''],
      Name: ['', [Validators.required]],
      email: [''],
      password: [''],
      confirmPassword: [''],
      acceptTerms: [false],
      id:['']
    });
  }
  onSubmit(){
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    var test = JSON.stringify(this.registerForm.value, null, 4);
    
    this._userService.setUserInfo(test).subscribe();

  }

  onReset() {
    this.registerForm.reset();
  }
  createUser(user:Register){
    console.log("updating USer details ", user)
    this._userService.setUserInfo(user)
  }

}
