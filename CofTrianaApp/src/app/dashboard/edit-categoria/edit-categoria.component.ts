import { element } from 'protractor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriasService } from './../services/categorias.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EditCategoriaDto } from '../dto/edit-categoria.dto';
import { SupercategoriasService } from '../services/supercategorias.service';
import { SuperCategoriaResp } from '../interfaces/supercategoria.interface';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.scss']
})
export class EditCategoriaComponent implements OnInit {
  editCategoria: FormGroup;
  id: number;
  arraySuperCategorias: SuperCategoriaResp[];
  superCategoriaSeleccionada: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoriaService: CategoriasService, public dialogRef: MatDialogRef<EditCategoriaComponent>) { }

  ngOnInit() {
    this.id = this.data.element.id;
    this.editCategoria = new FormGroup({
      id: new FormControl(this.data.element.id),
      name: new FormControl(this.data.element.name, [Validators.required])
    })
  }

  editarCategoria(id:number){
    const updatedCategoria = <EditCategoriaDto>this.editCategoria.value;
    this.categoriaService.editCategoria(id, updatedCategoria).subscribe(categoriaEditada =>{

      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

  

}