import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeRequest } from 'src/app/interfaces/auth';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3000';
  constructor(private http :HttpClient) { }

  
  getEmployeeData(request: EmployeeRequest): Observable<Employee[]> {
    const { first, rows, sortField, sortOrder, filter } = request;
    const page = (first / rows) + 1;
    let urlParams = `_page=${page}&_limit=${rows}`;
    if (sortField) {
      urlParams += `&_sort=${sortField}&_order=${sortOrder === 1 ? 'asc' : 'desc'}`;
    }

    if (filter && filter.FirstName) {
      urlParams += `&FirstName_like=${filter.FirstName}`
    }
    return this.http.get<Employee[]>(`${this.baseUrl}/Sheet1?${urlParams}`);
   
  }
}
