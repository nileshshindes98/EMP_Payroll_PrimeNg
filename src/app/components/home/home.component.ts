import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee_Service/employee.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { EmployeeRequest } from 'src/app/interfaces/auth';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/User_Service/user.service';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sidebarVisible: boolean = false;
users : any[] =[];
  employees: any[] = [];
  globalFilter = '';
  request: EmployeeRequest = {
    first: 0,
    rows: 10,
    sortField: '',
    sortOrder: 1,
    filter: {
      FirstName: '',
      LastName :'',
    },
  };
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private userService : UserService,
  ) {}
  ngOnInit(): void {
    this.loadUsers ();
  }

  

  loadUsers (){
    this.userService.getUsers().subscribe((data)=>{
      this.users=data;
    })
  }

  getEmployeeList() {
    this.employeeService
      .getEmployeeData(this.request)
      .subscribe((data) => (this.employees = data));
  }

  loadEmployees($event: TableLazyLoadEvent) {
    console.log($event);

    this.request.sortField = $event.sortField || '';
    this.request.sortOrder = $event.sortOrder || 1;
    this.request.first = $event.first || 0;

    //  if ($event.sortField !== undefined && $event.sortOrder !== undefined) {
    //   this.request.sortField = $event.sortField as string | string[];
    //   this.request.sortOrder = $event.sortOrder as number;
    //   this.request.first = 0; // Reset the page when sorting changes
    // } else {
    //   this.request.first = $event.first ?? 0;
    // }

    this.getEmployeeList();
  }

  filterEmployee() {
    this.request = {
      ...this.request,
      first: 0,
      filter: {
        FirstName: this.globalFilter,
        LastName :this.globalFilter,
      },
    };
    this.getEmployeeList();
  }

  // -----------------------------------toaster-------------------------------

  visible: boolean = false;

  showConfirm() {
    if (!this.visible) {
      this.messageService.add({
        key: 'confirm',
        sticky: true,
        severity: 'warn',
        summary: 'Are you sure?',
        detail: 'Confirm to proceed',
      });
      this.visible = true;
    }
  }

  onConfirm() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }
  getToastStyle() {
    const baseStyle = { 'margin-left': this.sidebarVisible ? '30vw' : '0' };
    return this.visible
      ? { ...baseStyle, bottom: '0', position: 'fixed' }
      : baseStyle;
  }
}
