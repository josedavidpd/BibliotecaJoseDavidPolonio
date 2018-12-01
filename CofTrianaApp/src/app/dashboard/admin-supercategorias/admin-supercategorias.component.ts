import { AddSupercategoriaComponent } from './../add-supercategoria/add-supercategoria.component';
import { SuperCategoriaDto } from './../dto/add-supercategoria.dto';
import { SuperCategoriaResp } from './../interfaces/supercategoria.interface';
import { Component, OnInit } from '@angular/core';
import { SupercategoriasService } from '../services/supercategorias.service';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { EditSupercategoriaComponent } from '../edit-supercategoria/edit-supercategoria.component';

@Component({
  selector: 'app-admin-supercategorias',
  templateUrl: './admin-supercategorias.component.html',
  styleUrls: ['./admin-supercategorias.component.scss']
})
export class AdminSupercategoriasComponent implements OnInit {

  constructor(private superCategoriaService: SupercategoriasService, public dialog: MatDialog, private title: Title) { }

  dataSource: SuperCategoriaResp[];
  displayedColumns: string[] = [
    "Id",
    "Nombre",
    "Acciones"
  ];

  ngOnInit() {

    this.title.setTitle('Admin - Supercategorias');

    this.getAllSuperCategorias();
  }


  getAllSuperCategorias(){
    this.superCategoriaService.getAllSuperCategorias().subscribe(superCategorias =>{
      this.dataSource = superCategorias;
    }, error =>{
      console.log(error);
    })
  }


  openDialogNewSuperCat(){
    const dialogNuevaSuperCat = this.dialog.open(AddSupercategoriaComponent);

    dialogNuevaSuperCat.afterClosed().subscribe(response =>{
      this.getAllSuperCategorias();
    }, error =>{
      console.log(error);
    })
  }

  openDialogEditSuperCat(superCategoriaEdit: SuperCategoriaDto){
    const dialogEditSuperCat = this.dialog.open(EditSupercategoriaComponent, {
      width: '15%',
      height: '20%',
      data:{
        element: superCategoriaEdit
      }
    })

    dialogEditSuperCat.afterClosed().subscribe(response =>{
      this.getAllSuperCategorias();
    }, error =>{
      console.log(error);
    })
  }

}
