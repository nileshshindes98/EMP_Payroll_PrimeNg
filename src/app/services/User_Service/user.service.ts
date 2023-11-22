import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'db.json'
  constructor (private http : HttpClient){}
  getUsers (): Observable <any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
