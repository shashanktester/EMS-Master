import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  photoPreview = false;
  disableEnableButton = true;
  dateOfBirth: Date = new Date(2019, 0, 25);
  datePickerConfig: Partial<BsDatepickerConfig>;
  departmentList: Department[] = [
    { id: 'IT', name: 'IT' },
    { id: 'HR', name: 'HR' },
    { id: 'Finanace', name: 'Finance' }
  ];

  constructor() {
    
    this.datePickerConfig = Object.assign({}, 
    {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(2019, 0, 1),
      maxDate: new Date(2019, 11, 31),
    });
   }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm);
  }

  togglePhotoPreview(){
    this.photoPreview = true;
  }

  disableEnableBtn(){
    this.disableEnableButton = false;
  }

}
