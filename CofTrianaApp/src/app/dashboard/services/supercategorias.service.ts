import { SuperCategoriaResp } from './../interfaces/supercategoria.interface';
import { Injectable } from '@angular/core';
import { SessionService } from 'src/app/session/services/session.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperCategoriaDto } from '../dto/add-supercategoria.dto';

const urlSuperCat = `${environment.apiUrl}/supercategoria`;

@Injectable({
  providedIn: 'root'
})
export class SupercategoriasService {

  constructor(private sessionService: SessionService, private http: HttpClient) { }

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.sessionService.getToken()}`,
      'Access-Control-Allow-Origin': '*'
    })
  };

  getAllSuperCategorias(): Observable<SuperCategoriaResp[]>{
    return this.http.get<SuperCategoriaResp[]>(`${urlSuperCat}/all`, this.requestOptions);
  }


  createSupercategoria(nuevaSuperCategoria: SuperCategoriaDto){

    return this.http.post<SuperCategoriaResp>(`${urlSuperCat}/create`, nuevaSuperCategoria ,this.requestOptions);
  }


  editSuperCategoria(id: number, editCategoria: SuperCategoriaDto){
    return this.http.put<SuperCategoriaResp>(`${urlSuperCat}/edit/${id}`, editCategoria ,this.requestOptions);
  }
  
}
