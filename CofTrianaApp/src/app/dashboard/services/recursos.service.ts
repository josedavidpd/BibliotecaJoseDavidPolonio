import { AddRecursoDto } from './../dto/add-recurso.dto';
import { Recursos } from './../interfaces/recursos.interface';
import { SessionService } from './../../session/services/session.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AddRecurso } from '../interfaces/add-recurso.interface';
import { EditRecurso } from '../dto/edit-recurso.dto';


const recursoUrl = `${environment.apiUrl}/recurso`;

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }


  getAllRecursos(){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

      return this.http.get<Recursos[]>(`${recursoUrl}/all`,requestOptions);
    

  }

  deleteRecurso(id:number){

    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.delete(`${recursoUrl}/${id}`,requestOptions);

  }


  addRecurso(nuevoRecursoDto: AddRecursoDto){

    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<AddRecurso>(`${recursoUrl}/create`,nuevoRecursoDto,requestOptions);

  }


  editarRecurso(id:number, recursoEditado: EditRecurso){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.put<EditRecurso>(`${recursoUrl}/edit/${id}`,recursoEditado,requestOptions);
  }
}
