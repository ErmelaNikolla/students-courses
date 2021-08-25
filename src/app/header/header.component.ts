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
// @NgModule({
//   imports [material],
//   exports [material]
// })
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
