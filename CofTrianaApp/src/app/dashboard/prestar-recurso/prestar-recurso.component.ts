import { RecursosService } from './../services/recursos.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../interfaces/usuario.interface';
import { PrestarDto } from '../dto/prestarRecurso.dto';

const ELEMENT_DATA: Usuario[] = [];

@Component({
  selector: 'app-prestar-recurso',
  templateUrl: './prestar-recurso.component.html',
  styleUrls: ['./prestar-recurso.component.scss']
})
export class PrestarRecursoComponent implements OnInit {
  idRecurso: number;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  displayedColumns: string[] = [
    "Nombre",
    "Email",
    "Acciones"
  ];
  constructor(public dialogRef: MatDialogRef<PrestarRecursoComponent> ,@Inject(MAT_DIALOG_DATA) public data: any,private recursoService:RecursosService,private usuarioService: UsuariosService) { }

  ngOnInit() {

    this.idRecurso = this.data.element.id;
    this.getUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe(usuarios =>{
      this.dataSource.data = usuarios;
    }, error =>{
      console.log(error);
    })
  }

  prestarRecurso(idUsuario:number){
    const dtoPrestar = new PrestarDto(idUsuario)
    this.recursoService.prestarRecurso(this.idRecurso,dtoPrestar).subscribe(recursoPrestado =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }
}
