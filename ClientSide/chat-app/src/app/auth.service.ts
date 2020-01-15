import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 //loggin in for login component 
 login(email: string, password: string){
  return this.http.post<{token: string}>('http://localhost:3000/api/signin', {email:email, password: password})
    .pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        console.log('access_token');
         return result;
      })
    );
}
  
  //signup for the signup component 
  signup(name:string,nickName:string,mobNumber:number,email: string, password: string): Observable<boolean> {
    console.log("service")
    return this.http.post('http://localhost:3000/api/signup', {name:name,nickName:nickName,mobNumber:mobNumber,email:email, password: password})
      .pipe(
        map(result => {
          console.log("User created successfully");
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  
 
}