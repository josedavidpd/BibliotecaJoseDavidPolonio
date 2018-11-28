import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { AddCategoriaDto } from '../dto/add-categoria.dto';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {
  createCategoria:FormGroup;

  constructor(public dialogRef: MatDialogRef<AddCategoriaComponent>,private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.createCategoria = new FormGroup({
      name: new FormControl('',  [Validators.required])
    })
  }

  addCategoria(){
    const nuevaCategoria = <AddCategoriaDto>this.createCategoria.value;
    this.categoriaService.addCategoria(nuevaCategoria).subscribe(response =>{
      this.dialogRef.close();

    }, error =>{
      console.log(error);
    }
    )
  }

}
