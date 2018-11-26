import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { AddCategoriaDto } from '../dto/add-categoria.dto';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.scss']
})
export class AddCategoriaComponent implements OnInit {

  name: string;

  constructor(public dialogRef: MatDialogRef<AddCategoriaComponent>,private categoriaService: CategoriasService) { }

  ngOnInit() {
  }

  addCategoria(){
    const nuevaCategoria = new AddCategoriaDto(this.name);
    this.categoriaService.addCategoria(nuevaCategoria).subscribe(response =>{
      this.dialogRef.close();

    }, error =>{
      console.log(error);
    }
    )
  }

}
