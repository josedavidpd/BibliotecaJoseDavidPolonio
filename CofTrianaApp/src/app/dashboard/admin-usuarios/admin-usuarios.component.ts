import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../interfaces/usuario.interface';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { DeleteUsuarioComponent } from '../delete-usuario/delete-usuario.component';
import { EditUsuarioComponent } from '../edit-usuario/edit-usuario.component';
import { AddUsuarioComponent } from '../add-usuario/add-usuario.component';


const ELEMENT_DATA: Usuario[] = [];




@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  displayedColumns: string[] = [
    "Id",
    "Nombre",
    "Email",
    "Telefonos",
    "Notas",
    "Rol",
    "Acciones"
  ];


  constructor(private usuarioService: UsuariosService,public dialog: MatDialog) { }

  ngOnInit() {
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

  openDialogDeleteUsuario(usuario: Usuario){
    const dialogDeleteUsuario = this.dialog.open(DeleteUsuarioComponent, {
      data:{
        element: usuario
      }
    })

    dialogDeleteUsuario.beforeClose().subscribe(response =>{
      this.getUsuarios();
    }, error =>{
      console.log(error);
    })
  }

  openDialogNuevoUsuario(){
    const dialogNuevoUsuario = this.dialog.open(AddUsuarioComponent,{
      width:'30%'
    });

    dialogNuevoUsuario.beforeClose().subscribe(response =>{
      this.getUsuarios();
    },error =>{
      console.log(error);
    })
  }


  openDialogEditUsuario(usuario: Usuario){
    this.usuarioService.getOneUsuario(usuario.id).subscribe(OneUsuario =>{
      usuario = OneUsuario;
    }, error =>{
      console.log(error);
    })
    const dialogEditUsuario = this.dialog.open(EditUsuarioComponent,{
      width: '20%',
      data:{
        element: usuario
      }
    })

    dialogEditUsuario.afterClosed().subscribe(response =>{
      this.getUsuarios();
    },error =>{
      console.log(error);
    })
  }

}
