import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SupercategoriasService } from '../services/supercategorias.service';
import { SuperCategoriaDto } from '../dto/add-supercategoria.dto';

@Component({
  selector: 'app-add-supercategoria',
  templateUrl: './add-supercategoria.component.html',
  styleUrls: ['./add-supercategoria.component.scss']
})
export class AddSupercategoriaComponent implements OnInit {

  createSuperCategoria: FormGroup;

  
  constructor(public dialogRef: MatDialogRef<AddSupercategoriaComponent>, private superCategoriaService: SupercategoriasService) { }

  ngOnInit() {
    this.createSuperCategoria = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }


  addSuperCategoria(){
    const addSuperCat = <SuperCategoriaDto>this.createSuperCategoria.value;
    this.superCategoriaService.createSupercategoria(addSuperCat).subscribe(superCategoria =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

  

}
