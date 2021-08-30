import { user } from './../user';
import { course } from './../course';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map, switchMap, tap } from "rxjs/operators";
// import 'rxjs/Rx';
import { AppComponent } from './../app.component';
import { map } from 'rxjs/operators';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-choose-courses',
  templateUrl: './choose-courses.component.html',
  styleUrls: ['./choose-courses.component.css']
})
export class ChooseCoursesComponent implements OnInit {

  private apiServerUrl = 'http://127.0.0.1:8000/api/courses';
  courses: any;
  appComponent: AppComponent;
  courseSelected: course | any;
  name = new FormControl('');
  credit = new FormControl('');
  lector = new FormControl('');

  constructor(
    appComponent: AppComponent,
    private http: HttpClient,
    private modalService: NgbModal
  ) {
    this.appComponent = appComponent;
  }

  ngOnInit(): void {

    this.http.get(`${this.apiServerUrl}`).subscribe((response: any) => {
      console.log('Response', response)
      this.courses = response['data'];
    })
  }

  onAdd(id: BigInteger) {
    console.log('you are enrollin')
    this.http.post(`${this.apiServerUrl}/${id}/${this.appComponent.authUser.id}`, {}).subscribe((response: any) => {
      // this.appComponent.authUser = response['data']['user'];
      // this.appComponent.authToken = response['data']['token'];
    })
  }


  openModal(course: course, content: any) {
    this.courseSelected = course;
    // console.log(this.courseSelected)
    this.modalService.open(content);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  updateCourse(updateCourse: NgForm): void {
    const name = this.name.value;
    const credit = this.credit.value;
    const lector = this.lector.value;
    console.log('form', updateCourse.value);
    console.log({ name, credit, lector });
    // console.log('testttt',editForm.value);
    this.http.post(`${this.apiServerUrl}/${this.courseSelected.id}`, { name, credit, lector }).subscribe((response: any) => {
      // this.appComponent.authUser = response['data']['user'];
      console.log(response)
      this.http.get(`${this.apiServerUrl}`).subscribe((response: any) => {
        console.log('Response', response)
        this.courses = response['data'];
        this.modalService.dismissAll()
      })
      // this.appComponent.authToken = response['data']['token'];
    })
  }

  deleteCourse(id: BigInteger) {
    this.http.delete(`${this.apiServerUrl}/${id}`, {}).subscribe((response: any) => {
      // this.appComponent.authUser = response['data']['user'];
      console.log(response)
      // this.appComponent.authToken = response['data']['token'];
    })
  }
}
