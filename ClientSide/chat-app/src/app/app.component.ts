import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ChatService]
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) { }

  
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}