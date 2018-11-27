import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/session/services/session.service';
import { Usuario } from '../interfaces/usuario.interface';


const usuarioUrl = `${environment.apiUrl}/user`;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }



  getAllUsuarios(){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Usuario[]>(`${usuarioUrl}/all`,requestOptions);
  }
}
