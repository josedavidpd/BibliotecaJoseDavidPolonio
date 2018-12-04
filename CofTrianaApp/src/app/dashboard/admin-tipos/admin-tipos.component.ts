import { Type } from './../interfaces/type.interface';
import { TiposService } from './../services/tipos.service';

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


const ELEMENT_DATA: Type[] = [];

@Component({
  selector: 'app-admin-tipos',
  templateUrl: './admin-tipos.component.html',
  styleUrls: ['./admin-tipos.component.scss']
})
export class AdminTiposComponent implements OnInit {


  displayedColumns: string[] = [
    "Id",
    "Nombre",
    "Acciones"
  ];


  constructor(private tipoService: TiposService ) { }

  ngOnInit() {
    this.getTipos();
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getTipos(){
    this.tipoService.getAllTipos().subscribe(tipos =>{
      this.dataSource.data = tipos;
    }, error =>{
      console.log(error);
    })
  }

}
