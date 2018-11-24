import { Type } from './../interfaces/type.interface';
import { SessionService } from './../../session/services/session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const tipoUrl= `${environment.apiUrl}/tipo`;

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }


  getAllTipos(){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Type[]>(`${tipoUrl}/all`,requestOptions);
  }





}
