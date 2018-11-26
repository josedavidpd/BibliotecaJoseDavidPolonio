import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { Category } from '../interfaces/category.interface';

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

  constructor(private categoriaService: CategoriasService) { }

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

}
