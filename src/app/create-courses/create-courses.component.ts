import { lector } from './../lector';
import { CreateCourses } from './../create-courses';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from './../app.component';
import { Form, NgForm, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {
  // createcourses: CreateCourses | undefined;
  private apiServerUrl = 'http://127.0.0.1:8000/api/courses';
  courses: any;
  appComponent: AppComponent;
  name = new FormControl('');
  credit = new FormControl('');
  lector = new FormControl('');

  constructor(
    private http: HttpClient,
    appComponent:AppComponent
  ) { 
    this.appComponent = appComponent;
  }

  ngOnInit(): void {
  }
  createcourses(courseForm: NgForm): void{
    const name = this.name.value;
    const credit = this.credit.value;
    const lector = this.lector.value;
    this.http.post(`${this.apiServerUrl}`, { name,credit, lector }).subscribe((response: any) => {
      // this.appComponent.authUser = response['data']['user'];
      // this.appComponent.authToken = response['data']['token'];
    })

  }

}
