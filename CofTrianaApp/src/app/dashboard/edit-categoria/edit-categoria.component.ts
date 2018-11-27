import { CategoriasService } from './../services/categorias.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EditCategoriaDto } from '../dto/edit-categoria.dto';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.scss']
})
export class EditCategoriaComponent implements OnInit {

  id: number;
  name: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoriaService: CategoriasService, public dialogRef: MatDialogRef<EditCategoriaComponent>) { }

  ngOnInit() {
    console.log(this.data);

    this.id = this.data.element.id;
    this.name = this.data.element.name;
  }

  editarCategoria(id:number){
    const updatedCategoria = new EditCategoriaDto(this.id, this.name);
    this.categoriaService.editCategoria(id, updatedCategoria).subscribe(categoriaEditada =>{

      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}
