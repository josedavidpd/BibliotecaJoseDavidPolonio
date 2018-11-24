import { SessionService } from './../../session/services/session.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';
import { environment } from 'src/environments/environment';

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
}
