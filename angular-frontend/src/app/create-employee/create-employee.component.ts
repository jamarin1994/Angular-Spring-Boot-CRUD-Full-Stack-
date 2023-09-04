import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
//import { EmployeeListComponent } from '../employee-list/employee-list.component'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employees: Employee[];
  existingName: boolean = false;
  employee: Employee = new Employee();
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  saveEmployee(){
    //Validation
    this.existingName = false;
    this.validationExistingNameProduct()
    //Save
    if (this.existingName == false)
    {
      if (formatDate(this.employee.fechaIngreso, 'yyyy-MM-dd', 'en-US') <= this.date)
      {
        this.employeeService.createEmployee(this.employee).subscribe( data =>{
          console.log(data);
          this.goToEmployeeList();
        },
        error => console.log(error));
      }
      else{
        alert("La fecha de ingreso debe ser menor o igual a la fecha actual.")
      }
    }
    else{
      alert("El Nombre del producto ya existe, por lo que no se permite duplicar. Por favor corrija el nombre del producto");
    }
  }

  validationExistingNameProduct()
  {
    this.employees.forEach((element) =>
    {
      if (element.nombreProducto == this.employee.nombreProducto)
      {
        this.existingName = true;
      }
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  public getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
