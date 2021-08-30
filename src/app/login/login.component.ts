import { AppComponent } from './../app.component';
import { user } from './../user';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
// import { url } from 'inspector';
// import { user } from './../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // moduleId: module.id,

})
export class LoginComponent implements OnInit {

  private apiServerUrl = 'http://127.0.0.1:8000/api/login';

  email = new FormControl('');
  password = new FormControl('');
  // todo - make a service for global reach authed usered
  authUser: user | null = null;
  appComponent: AppComponent;
  authToken: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    appComponent:AppComponent
  ) {
    this.appComponent = appComponent;
   }

  ngOnInit(): void {
  }

  signIn(): void {
    const email = this.email.value;
    const password = this.password.value;
    this.http.post(`${this.apiServerUrl}`, { email, password }).subscribe((response: any) => {
      // if(response && response.data && response.data.token) {
      //   localStorage.setItem("token", response.data.token);
      // }
      this.appComponent.authUser = response['data']['user'];
      this.appComponent.authToken = response['data']['token'];
    })
  }
}
