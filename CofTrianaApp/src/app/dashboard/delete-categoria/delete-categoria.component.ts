import { CategoriasService } from './../services/categorias.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.scss']
})
export class DeleteCategoriaComponent implements OnInit {

 

  constructor(public snackBar: MatSnackBar,public dialogRef: MatDialogRef<DeleteCategoriaComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private categoriaService: CategoriasService) { }

  name = this.data.element.name;
  idCategoria = this.data.element.id;
  palabraBorrar: string;

  ngOnInit() {
  }

  borrarCategoria(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(categoria =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }




  validarDelete():boolean{

    let validar = true;

    if(this.palabraBorrar != 'ELIMINAR'){
      validar = false;
    }
    return validar;

  }

}
