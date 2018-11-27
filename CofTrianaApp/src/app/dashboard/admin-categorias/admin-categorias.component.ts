import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Category } from '../interfaces/category.interface';
import { AddCategoriaDto } from '../dto/add-categoria.dto';
import { AddCategoriaComponent } from '../add-categoria/add-categoria.component';
import { MatDialog } from '@angular/material';
import { EditCategoriaComponent } from '../edit-categoria/edit-categoria.component';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.scss']
})
export class AdminCategoriasComponent implements OnInit {

  dataSource: Category[];
  displayedColumns: string[] = [
    "Id",
    "Nombre",
    "Acciones"
  ];

  constructor(private dialog: MatDialog,private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.getAllCategorias();
  }


  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe(categorias =>{
      this.dataSource = categorias;
    }, error =>{
      console.log(error);
    }
    )
  }
  openDialogAddCategoria(){
    const dialogAddCategoria = this.dialog.open(AddCategoriaComponent);

    dialogAddCategoria.afterClosed().subscribe(
      response => {
        this.getAllCategorias();
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogEditCategoria(categoria: Category){
    const dialogEditCategoria = this.dialog.open(EditCategoriaComponent, {
      width: '20%',
      data: {
        element: categoria
      }
    })
    dialogEditCategoria.afterClosed().subscribe(response =>{

      this.getAllCategorias();

    }, error => {
      console.log(error);
    }
    
    )
  }

}
