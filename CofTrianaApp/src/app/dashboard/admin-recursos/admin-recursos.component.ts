import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../services/recursos.service';
import { Recursos } from '../interfaces/recursos.interface';


@Component({
  selector: 'app-admin-recursos',
  templateUrl: './admin-recursos.component.html',
  styleUrls: ['./admin-recursos.component.css']
})
export class AdminRecursosComponent implements OnInit {

  constructor(private recursoService: RecursosService) { }

  ngOnInit() {
    this.getRecursos();
  }

  displayedColumns: string[] = ['Id', 'Nombre', 'Tipo', 'Categoria', 'Autor', 'Fecha de publicacion', 'Acciones'];
  dataSource : Recursos[];


  getRecursos(){
    this.recursoService.getAllRecursos().subscribe(recursos => {
      this.dataSource = recursos;
    }, error => {
      console.log(error);
    }
    )
  }

}
