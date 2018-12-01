import { SupercategoriasService } from './../services/supercategorias.service';
import { element } from 'protractor';
import { CategoriasService } from './../services/categorias.service';
import { Component, OnInit, Inject} from '@angular/core';
import { RecursosService } from '../services/recursos.service';
import { Category } from '../interfaces/category.interface';
import { Type } from '../interfaces/type.interface';
import { TiposService } from '../services/tipos.service';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material'
import { EditRecurso } from '../dto/edit-recurso.dto';
import { SuperCategoriaResp } from '../interfaces/supercategoria.interface';

@Component({
  selector: 'app-edit-recurso',
  templateUrl: './edit-recurso.component.html',
  styleUrls: ['./edit-recurso.component.scss']
})
export class EditRecursoComponent implements OnInit {
  id:number
  title: string;
  autor: string;
  anyo: string;
  url: string;
  content: string;
  tipoSeleccionado: number;
  categoriaSeleccionada: number;

  arrayCategorias: Category[];
  arrayTipos: Type[];
  arraySuperCategorias : SuperCategoriaResp[];

  constructor(private superCategoriaService: SupercategoriasService,@Inject(MAT_DIALOG_DATA) public data: any,private recursoService: RecursosService, private categoriaService: CategoriasService, private tipoService: TiposService, public dialogRef: MatDialogRef<EditRecursoComponent>) {

    
   }

  ngOnInit() {
    this.id = this.data.element.id;
    this.title = this.data.element.title;
    this.autor = this.data.element.autor;
    this.anyo = this.data.element.anyo;
    this.url = this.data.element.url;
    this.content = this.data.element.content;
    this.tipoSeleccionado = this.data.element.type.id;
    this.categoriaSeleccionada = this.data.element.category.id;

    this.getCategorias();
    this.getTipos();
    this.getSuperCategorias();
  }

  getCategorias(){
    this.categoriaService.getAllCategorias().subscribe(categorias =>{
      this.arrayCategorias = categorias;
    }, error => {
      console.log(error);
    }
    )
  }

  getTipos(){
    this.tipoService.getAllTipos().subscribe( tipos => {
      this.arrayTipos = tipos;
    }, error => {
      console.log(error);
    }
    )
  }

  getSuperCategorias(){
    this.superCategoriaService.getAllSuperCategorias().subscribe(superCategorias =>{
      this.arraySuperCategorias = superCategorias;
    }, error =>{
      console.log(error);
    })
  }

  editRecurso(){
    const recursoEditado = new EditRecurso(this.id, this.title, this.autor, this.anyo,this.url ,this.content, this.tipoSeleccionado, this.categoriaSeleccionada);
    this.recursoService.editarRecurso(this.id, recursoEditado).subscribe(recursoEditado =>{

      this.dialogRef.close();
    }, error =>{
      console.log(error);
    }
    )
  }

}
