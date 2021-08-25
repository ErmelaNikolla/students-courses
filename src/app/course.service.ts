import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map , tap} from 'rxjs/operators';


import { ChooseCoursesComponent } from './choose-courses/choose-courses.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private CourseService: CourseService) { }
}
