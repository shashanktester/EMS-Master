import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departmentList: Department[] = [
    { id: 'IT', name: 'IT' },
    { id: 'HR', name: 'HR' },
    { id: 'Finanace', name: 'Finance' }
  ];

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {

    console.log(empForm);

  }

}
