import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { SupercategoriasService } from '../services/supercategorias.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SuperCategoriaDto } from '../dto/add-supercategoria.dto';

@Component({
  selector: 'app-edit-supercategoria',
  templateUrl: './edit-supercategoria.component.html',
  styleUrls: ['./edit-supercategoria.component.scss']
})
export class EditSupercategoriaComponent implements OnInit {

  
  editSuperCategoria: FormGroup;
  id: number;  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private superCategoriaService: SupercategoriasService, public dialogRef: MatDialogRef<EditSupercategoriaComponent>) { }

  ngOnInit() {

  this.id = this.data.element.id;

  this.editSuperCategoria = new FormGroup({
    id: new FormControl(this.data.element.id),
    name: new FormControl(this.data.element.name, [Validators.required])


  })
  }


  editarSuperCategoria(){
    const editSuperCat = <SuperCategoriaDto>this.editSuperCategoria.value;

    this.superCategoriaService.editSuperCategoria(this.id, editSuperCat).subscribe(editSuperCat =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}
