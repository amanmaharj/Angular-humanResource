import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './model/employee.model';


const baseUrl = "http://localhost:8080/api/v1/employee";
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(baseUrl);
  }

  storeData(data: any): Observable<any>
  {
    return this.http.post(baseUrl,data);
  }

}
