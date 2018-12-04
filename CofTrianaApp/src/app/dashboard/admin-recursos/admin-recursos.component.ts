import { Component, OnInit, ViewChild } from "@angular/core";
import { RecursosService } from "../services/recursos.service";
import { Recursos } from "../interfaces/recursos.interface";
import { MatDialog, MatTableDataSource, MatPaginator, MatSort} from "@angular/material";
import { AddRecursoComponent } from "../add-recurso/add-recurso.component";
import { Title } from "@angular/platform-browser";
import { EditRecursoComponent } from "../edit-recurso/edit-recurso.component";
import { DeleteRecursoComponent } from "../delete-recurso/delete-recurso.component";
import { PrestarRecursoComponent } from "../prestar-recurso/prestar-recurso.component";
import { DevolverRecursoComponent } from "../devolver-recurso/devolver-recurso.component";

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
    "Url",
    "¿Disponible?",
    "Acciones",
    "Prestar/Devolver"
  ];

  
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecursos() {
    this.recursoService.getAllRecursos().subscribe(
      recursos => {
        //this.dataSource.data = recursos;
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogAddRecurso() {
    const dialogAddRecurso = this.dialog.open(AddRecursoComponent,{
      width:'30%',
      height:'90%'
    });

    dialogAddRecurso.afterClosed().subscribe(
      response => {
        this.getRecursos();
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogPrestarRecurso(recurso: Recursos){
    const dialogPrestarRecurso = this.dialog.open(PrestarRecursoComponent, {
      width: '50%',
      data: {
        element: recurso
      }
    })

    dialogPrestarRecurso.afterClosed().subscribe(response =>{
      this.getRecursos();
    }, error =>{
      console.log(error);
    })
  }

  openDialogDevolverRecurso(recurso: Recursos){
    const dialogDevolverRecurso = this.dialog.open(DevolverRecursoComponent, {
      width: '20%',
      height: '40%',
      data: {
        element: recurso
      }
    })

    dialogDevolverRecurso.afterClosed().subscribe(response =>{
      this.getRecursos();
    }, error =>{
      console.log(error);
    })
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
      height:'30%',
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
