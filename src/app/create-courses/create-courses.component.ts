import { CreateCourses } from './../create-courses';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {
  createcourses: CreateCourses | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
