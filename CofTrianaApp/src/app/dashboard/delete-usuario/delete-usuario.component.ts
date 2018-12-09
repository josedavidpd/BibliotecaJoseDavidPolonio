import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.scss']
})
export class DeleteUsuarioComponent implements OnInit {  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private usuarioService: UsuariosService, public dialogRef: MatDialogRef<DeleteUsuarioComponent>) { }
  idUsuario = this.data.element.id;
  name = this.data.element.name;
  palabraBorrar: string;

  ngOnInit() {
  }

  borrarUsuario(id:number){
    this.usuarioService.deleteUsuario(id).subscribe(usuario =>{
      this.dialogRef.close();
    },error =>{
      console.log(error);
    })
  }

  validarDelete():boolean {
    let validar = true;

    if(this.palabraBorrar != 'ELIMINAR'){
      validar = false;
    }
    return validar;
  }

}
