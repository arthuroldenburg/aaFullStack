import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/hospital.model';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  private url = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) {}

  getAll():Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.url}/patients`);
  }

  login(login: Login):Observable<String> {
    return this.httpClient.post<String>(`${this.url}/auth/login`, login);
  }

  register(body: Register):Observable<any> {
    return this.httpClient.post<any>(`${this.url}/auth/register`, body);
  }

  registerPatient(body: Patient): Observable<any> {
    return this.httpClient.post(`${this.url}/patients`, body)
  }
  logout(body: any):Observable<any> {
    return this.httpClient.post<any>(`${this.url}/auth/logout`, body);
  }
}
