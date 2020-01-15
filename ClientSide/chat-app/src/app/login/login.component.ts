import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import {FormGroup,Validators,FormArray,FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
 // public email: string;
  //public password: string;
  public error_message: string;
  public u :string;
  constructor(private auth: AuthService, private router: Router,private fb:FormBuilder) { }
  //Reactive Form
  loginForm:FormGroup

  ngOnInit() { 

    this.loginForm=this.fb.group({
     email:["",Validators.required],
     password:["",Validators.required]
    })
  }

  navigateToChat() {
    this.router.navigateByUrl('/chat', { state: this.loginForm.value });
    console.log(this.loginForm.value);
  }

  public submit() {
    this.auth.login(this.loginForm.get("email").value, this.loginForm.get('password').value)
      .pipe(first())
      .subscribe(
        result =>{ 
        this.router.navigateByUrl('/chat')
        
        },
        error=>{
          this.error_message="Invalid Credentials"

        });
        this.navigateToChat()
  }
}