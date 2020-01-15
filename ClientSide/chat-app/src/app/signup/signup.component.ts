import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  public email: string;
  public mobNumber: number;
  public password: string;
  public name: string;
  public nickName: string;


  public error: string;
  public success_message:string;
  public error_message:string;
  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    console.log("inside ts")
    this.auth.signup(this.name,this.nickName,this.mobNumber,this.email, this.password)
      .pipe(first())
      .subscribe(
        result =>{
          this.success_message="User Created Successfully"
          this.email=null;
          this.password=null;
          this.mobNumber=null;
          this.name=null;
          this.nickName=null;
        } ,
        err => this.error_message = 'Could not create user'
      );
  }

}