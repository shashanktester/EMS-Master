import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [{
    id: 1,
    name: "Soumya",
    gender: "Male",
    email: "soumya@gmail.com",
    contactPreference: "Email",
    dateOfBirth: new Date("04/23/1992"),
    department: "IT",
    isActive: true,
    photoPath: "assets/images/john.png"
  },

  {

    id: 2,
    name: "Shashank",
    gender: "Male",  
    phoneNumber: 99999999,
    contactPreference: "phone",
    dateOfBirth: new Date("02/27/1990"),
    department: "Finance",
    isActive: true,
    photoPath: "assets/images/mark.png"
  },

  {

    id: 3,
    name: "Mary",
    gender: "Female",
    email: "Mary@gmail.com",
    contactPreference: "email",
    dateOfBirth: new Date('05/25/1988'),
    department: "HR",
    isActive: false,
    photoPath: "assets/images/mary.png"    
  }]

  constructor() { }

  ngOnInit() {
  }

}
