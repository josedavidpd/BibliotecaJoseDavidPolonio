
import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../services/recursos.service';
import { Recursos } from '../interfaces/recursos.interface';
import { MatDialog } from '@angular/material';
import { AddRecursoComponent } from '../add-recurso/add-recurso.component';


@Component({
  selector: 'app-admin-recursos',
  templateUrl: './admin-recursos.component.html',
  styleUrls: ['./admin-recursos.component.css']
})
export class AdminRecursosComponent implements OnInit {


     constructor(private recursoService: RecursosService, public dialog: MatDialog ) { }

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

  borrarRecurso(id: number){
    this.recursoService.deleteRecurso(id).subscribe(response => {
      this.getRecursos();
    }, error => {
      console.log(error);
    }
    )
  }

  openDialogAddRecurso(){
    const dialogAddRecurso = this.dialog.open(AddRecursoComponent);

    dialogAddRecurso.afterClosed().subscribe( response => {

      this.getRecursos();
    }, error => {
      console.log(error);
    }
    
    )
  }

}
