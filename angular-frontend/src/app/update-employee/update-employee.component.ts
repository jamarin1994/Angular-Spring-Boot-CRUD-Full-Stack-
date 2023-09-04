import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employees: Employee[];
  existingName: boolean = false;
  id: number;
  employee: Employee = new Employee();
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.validationExistingNameProduct();
    if (this.existingName == false)
    {
      if (formatDate(this.employee.fechaIngreso, 'yyyy-MM-dd', 'en-US') <= this.date)
      {
        this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
          this.goToEmployeeList();
        }
        , error => console.log(error));
      }
      else{
        alert("La fecha de ingreso debe ser menor o igual a la fecha actual.")
      }
    }
    else{
      alert("El Nombre del producto ya existe, por lo que no se permite duplicar. Por favor corrija el nombre del producto");
    }
    this.existingName = false;
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  //Obtiene la lista de employees
  public getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  //Validación nombre del producto
  validationExistingNameProduct()
  {
    this.employees.forEach((element) =>
    {
      if (element.nombreProducto == this.employee.nombreProducto && element.id != this.id)
      {
        this.existingName = true;
      }
      console.log("Es validado el nombre? :",this.existingName);;
    });
  }
}
