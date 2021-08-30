import { Component, OnInit } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button';
import { AppComponent } from './../app.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Form, NgForm, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  Roles: any = ['Admin', 'Lector', 'User'];
  appComponent: AppComponent;
  name = new FormControl('');
  email = new FormControl('');
  role = new FormControl('');
  password = new FormControl('');
  confirm_password = new FormControl('');
  private apiServerUrl = 'http://127.0.0.1:8000/api/register';

  constructor(
    appComponent:AppComponent,
    private http: HttpClient
    ) {
      this.appComponent = appComponent;
     }

  ngOnInit(): void {
  }

  register():void {
    const email = this.email.value;
    const password = this.password.value;
    const name = this.name.value;
    const role = this.role.value;
    const confirm_password = this.confirm_password.value;
    console.log('u regjistrove')
    this.http.post(`${this.apiServerUrl}`, { email, password, name, role, confirm_password }).subscribe((response: any) => {
      this.appComponent.authUser = response['data']['user'];
      this.appComponent.authToken = response['data']['token'];
    })
  }
}

