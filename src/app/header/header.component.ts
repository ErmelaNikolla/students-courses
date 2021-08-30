import { AppComponent } from './../app.component';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { from } from 'rxjs';
import{ MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appComponent: AppComponent;
  isUserLoggedIn: boolean = false;
  constructor(
    appComponent:AppComponent
  ) {
    this.appComponent = appComponent;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem("token"));
    this.isUserLoggedIn = localStorage.getItem("token") != undefined;
  }

}
