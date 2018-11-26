import { Component, OnInit, ViewChild } from "@angular/core";
import { RecursosService } from "../services/recursos.service";
import { Recursos } from "../interfaces/recursos.interface";
import { MatDialog, MatTableDataSource, MatPaginator, MatSort} from "@angular/material";
import { AddRecursoComponent } from "../add-recurso/add-recurso.component";
import { Title } from "@angular/platform-browser";
import { EditRecursoComponent } from "../edit-recurso/edit-recurso.component";
import { DeleteRecursoComponent } from "../delete-recurso/delete-recurso.component";

const ELEMENT_DATA: Recursos[] = [];

@Component({
  selector: "app-admin-recursos",
  templateUrl: "./admin-recursos.component.html",
  styleUrls: ["./admin-recursos.component.css"]
})


export class AdminRecursosComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;



  constructor(
    private recursoService: RecursosService,
    public dialog: MatDialog,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Admin - Recursos');
    this.getRecursos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [
    "Id",
    "Titulo",
    "Descripcion",
    "Tipo",
    "Categoria",
    "Autor",
    "Fecha de publicacion",
    "¿Disponible?",
    "Acciones"
  ];

  
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecursos() {
    this.recursoService.getAllRecursos().subscribe(
      recursos => {
        this.dataSource.data = recursos;
      },
      error => {
        console.log(error);
      }
    );
  }

  borrarRecurso(id: number) {
    this.recursoService.deleteRecurso(id).subscribe(
      response => {
        this.getRecursos();
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogAddRecurso() {
    const dialogAddRecurso = this.dialog.open(AddRecursoComponent);

    dialogAddRecurso.afterClosed().subscribe(
      response => {
        this.getRecursos();
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogEditRecurso(recurso : Recursos){
    const dialogEditRecurso = this.dialog.open(EditRecursoComponent, {
      width: '30%',
      data :{
        element : recurso
        
      }
    });
    dialogEditRecurso.afterClosed().subscribe(response =>{

      this.getRecursos();

    }, error => {
      console.log(error);
    }
    
    )
  }

  openDialogDeleteRecurso(recurso: Recursos){
    const dialogDeleteRecurso = this.dialog.open(DeleteRecursoComponent, {
      data:{
        element:recurso
      }
    });
    dialogDeleteRecurso.afterClosed().subscribe (response =>{
      this.getRecursos();
    }, error =>{
      console.log(error);
    }
    )
  }
}
