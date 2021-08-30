import { course } from './../course';
// import { CreateCourses } from './../create-courses';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AppComponent } from '../app.component';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lector', 'credit'];
  dataToDisplay = [...ELEMENT_DATA];
  private apiServerUrl = 'http://127.0.0.1:8000/api/courses/my';

  appData:any;
  courses:any;

  dataSource = new ExampleDataSource(this.dataToDisplay);
  appComponent: AppComponent;

  constructor(
    appComponent:AppComponent,
    private http: HttpClient
    ) {
      this.appComponent = appComponent;
     }

  ngOnInit(): void {
    console.log('here')
    this.http.get(`${this.apiServerUrl}/${this.appComponent.authUser.id}`, {}).subscribe((response: any) => {
      this.courses = response['data'];
    })
    console.log('here')
  }

}


export interface CreateCourses{
  coursename: string;
  lector: string;
  coursecredits: number;
 
}

const ELEMENT_DATA: CreateCourses[] = [
  // {coursename: '', lector: '', coursecredit:any},

];


class ExampleDataSource extends DataSource<CreateCourses> {
  private _dataStream = new ReplaySubject<CreateCourses[]>();

  constructor(initialData: CreateCourses[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<CreateCourses[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: CreateCourses[]) {
    this._dataStream.next(data);
  }
}
