import { Component, OnInit } from '@angular/core';
import { user } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authUser: user | any = null;
  authToken: string | any  = null;
  title = 'angular-students-lectors';

  signOut(): void {
    this.authUser = null;
    this.authToken = null;
    // localStorage.removeItem("token")
  }
}
