import { UsuariosService } from './../services/usuarios.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Recursos } from '../interfaces/recursos.interface';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss']
})
export class InfoUsuarioComponent implements OnInit {

  name:string;
  email:string;
  phone: string;
  notes: string;
  role: string;
  recursos : Recursos[];
  numRecursos : number;

  constructor(private usuarioService: UsuariosService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<InfoUsuarioComponent>) { }

  
  ngOnInit() {
    this.getOneUsuario();
  }


  getOneUsuario(){
    this.usuarioService.getOneUsuario(this.data.element.id).subscribe(usuario =>{
      this.name = usuario.name;
      this.email = usuario.email;
      this.phone = usuario.phone;
      this.notes = usuario.notes;
      this.role = usuario.role;
      this.recursos = usuario.recursos;
      this.numRecursos = usuario.recursos.length;
    }, error =>{
      console.log(error);
    })
  }

}
