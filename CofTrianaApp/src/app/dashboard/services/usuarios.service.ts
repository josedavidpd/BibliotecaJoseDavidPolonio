import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/session/services/session.service';
import { Usuario } from '../interfaces/usuario.interface';
import { EditAddUsuarioDto } from '../dto/edit-add-usuario.dto';
import { EditAddUsuarioResponse } from '../interfaces/edit-add-usuario.interface';
import { OneUsuario } from '../interfaces/one-usuario.interface';
import { FormGroup } from '@angular/forms';


const usuarioUrl = `${environment.apiUrl}/user`;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }


  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.sessionService.getToken()}`,
      'Access-Control-Allow-Origin': '*'
    })
  };

  getAllUsuarios(){
    
    return this.http.get<Usuario[]>(`${usuarioUrl}/all`,this.requestOptions);
  }


  deleteUsuario(id :number){
    

    return this.http.delete(`${usuarioUrl}/${id}`,this.requestOptions);


  }

  editUsuario(id:number, usuarioEditado: EditAddUsuarioDto){
    

    return this.http.put<EditAddUsuarioDto>(`${usuarioUrl}/${id}`,usuarioEditado,this.requestOptions);
  }


  addUsuario(nuevoUsuario: EditAddUsuarioDto){
    

    return this.http.post<EditAddUsuarioResponse>(`${usuarioUrl}/create`,nuevoUsuario,this.requestOptions);
  }

  getOneUsuario(id:number){
    

    return this.http.get<OneUsuario>(`${usuarioUrl}/${id}`,this.requestOptions);
  }
}
