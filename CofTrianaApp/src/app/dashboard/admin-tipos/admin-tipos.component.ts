import { Type } from './../interfaces/type.interface';
import { TiposService } from './../services/tipos.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-tipos',
  templateUrl: './admin-tipos.component.html',
  styleUrls: ['./admin-tipos.component.scss']
})
export class AdminTiposComponent implements OnInit {

  dataSource: Type[];

  displayedColumns: string[] = [
    "Id",
    "Nombre",
    "Acciones"
  ];


  constructor(private tipoService: TiposService ) { }

  ngOnInit() {
    this.getTipos();
  }


  getTipos(){
    this.tipoService.getAllTipos().subscribe(tipos =>{
      this.dataSource = tipos;
    }, error =>{
      console.log(error);
    })
  }

}
