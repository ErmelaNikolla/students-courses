// import { CreateCourses } from './../create-courses';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lector', 'credit'];
  dataToDisplay = [...ELEMENT_DATA];

  appData:any;

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [
      ...this.dataToDisplay,
      ELEMENT_DATA[randomElementIndex]
    ];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
  constructor() {}

  ngOnInit(): void {
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
