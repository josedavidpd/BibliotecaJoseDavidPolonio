import { SessionService } from './../../session/services/session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { environment } from 'src/environments/environment';
import { AddRecurso } from '../interfaces/add-recurso.interface';
import { AddRecursoDto } from '../dto/add-recurso.dto';
import { AddCategoria } from '../interfaces/add-categoria.interface';
import { AddCategoriaDto } from '../dto/add-categoria.dto';

const categoriaUrl= `${environment.apiUrl}/categoria`;

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }


  getAllCategorias(){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Category[]>(`${categoriaUrl}/all`,requestOptions);
  }

  addCategoria(nuevaCategoria: AddCategoriaDto){
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sessionService.getToken()}`,
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<AddCategoria>(`${categoriaUrl}/create`,nuevaCategoria,requestOptions);
  }
}
