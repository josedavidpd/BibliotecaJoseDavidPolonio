import { PrestarDto } from './../dto/prestarRecurso.dto';

import { AddRecursoDto } from './../dto/add-recurso.dto';
import { Recursos } from './../interfaces/recursos.interface';
import { SessionService } from './../../session/services/session.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddRecurso } from '../interfaces/add-recurso.interface';
import { EditRecurso } from '../dto/edit-recurso.dto';
import { PrestarDevolverRecursoResp } from '../interfaces/prestar-recurso.interface';
import { DevolverRecursoDto } from '../dto/devolver-recurso.dto';


const recursoUrl = `${environment.apiUrl}/recurso`;

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.sessionService.getToken()}`,
      'Access-Control-Allow-Origin': '*'
    })
  };



  getAllRecursos(){
    

      return this.http.get<Recursos[]>(`${recursoUrl}/all`,this.requestOptions);
    

  }

  deleteRecurso(id:number){

    

    return this.http.delete(`${recursoUrl}/${id}`,this.requestOptions);

  }


  addRecurso(nuevoRecursoDto: AddRecursoDto){

    

    return this.http.post<AddRecurso>(`${recursoUrl}/create`,nuevoRecursoDto, this.requestOptions);

  }


  editarRecurso(id:number, recursoEditado: EditRecurso){
    

    return this.http.put<EditRecurso>(`${recursoUrl}/edit/${id}`,recursoEditado,this.requestOptions);
  }

  prestarRecurso(idRecurso:number, userId: PrestarDto){
    return this.http.put<PrestarDevolverRecursoResp>(`${recursoUrl}/prestar/${idRecurso}`,userId,this.requestOptions);
  }

  devolverRecurso(idRecurso:number, devolverDto: DevolverRecursoDto){
    return this.http.put<PrestarDevolverRecursoResp>(`${recursoUrl}/devolver/${idRecurso}`,devolverDto,this.requestOptions);
  }
}
