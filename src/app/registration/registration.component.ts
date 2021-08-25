import { Component, OnInit } from '@angular/core';
import{ MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  Roles: any = ['Admin', 'Lector', 'Student'];

  constructor() { }

  ngOnInit(): void {
  }

}

