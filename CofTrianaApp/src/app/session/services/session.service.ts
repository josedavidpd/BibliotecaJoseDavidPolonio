import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../dto/login.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const authUrl = `${environment.apiUrl}/auth`;

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  login(loginDto : LoginDto): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(`${authUrl}/login`,loginDto,requestOptions);
    
  }

  setLoginData(loginResponse: LoginResponse){
    localStorage.setItem('token', loginResponse.token);
    localStorage.setItem('email', loginResponse.email);
    localStorage.setItem('nombre', loginResponse.name);
    localStorage.setItem('role', loginResponse.role);
    localStorage.setItem('phone', loginResponse.phone);
  }

  getToken(): string{
    return localStorage.getItem('token');
  }

  getNombre(): string{
    return localStorage.getItem('nombre');
  }
  getEmail():string{
    return localStorage.getItem('email');
  }
  getPhone(): string{
    return localStorage.getItem('phone');
  }

}
