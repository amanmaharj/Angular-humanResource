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

  get(id: any): Observable<Employee>{
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(baseUrl);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  storeData(data: any): Observable<any>
  {
    return this.http.post(baseUrl,data);
  }

  deleteById(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
