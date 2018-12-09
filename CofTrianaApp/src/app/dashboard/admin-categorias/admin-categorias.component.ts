import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Category } from '../interfaces/category.interface';
import { AddCategoriaComponent } from '../add-categoria/add-categoria.component';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { EditCategoriaComponent } from '../edit-categoria/edit-categoria.component';
import { DeleteCategoriaComponent } from '../delete-categoria/delete-categoria.component';

const ELEMENT_DATA: Category[] = [];

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.scss']
})
export class AdminCategoriasComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns: string[] = [
    "Id",
    "Nombre",
    "SuperCategoria",
    "Acciones"
  ];



  constructor(private dialog: MatDialog, private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.getAllCategorias();
  }  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe(categorias =>{
      this.dataSource.data = categorias;
    }, error =>{
      console.log(error);
    }
    )
  }
  openDialogAddCategoria(){
    const dialogAddCategoria = this.dialog.open(AddCategoriaComponent,{
      height:'30%'
    });

    dialogAddCategoria.afterClosed().subscribe(
      response => {
        this.getAllCategorias();
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogDeleteCategoria(categoria: Category){
    const dialogDeleteCategoria = this.dialog.open(DeleteCategoriaComponent,{
      height:'30%',
      data :{
        element: categoria
      }
    })

    dialogDeleteCategoria.afterClosed().subscribe(response =>{
      this.getAllCategorias();
    }, error =>{
      console.log(error);
    })
  }

  openDialogEditCategoria(categoria: Category){
    const dialogEditCategoria = this.dialog.open(EditCategoriaComponent, {
      width: '30%',
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
