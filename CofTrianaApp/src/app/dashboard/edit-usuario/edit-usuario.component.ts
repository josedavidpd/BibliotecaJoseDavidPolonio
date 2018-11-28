import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UsuariosService } from '../services/usuarios.service';
import { EditAddUsuarioDto } from '../dto/edit-add-usuario.dto';
import { EditUsuarioDto } from '../dto/edit-usuario.dto';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  notes: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private usuarioService: UsuariosService, public dialogRef: MatDialogRef<EditUsuarioComponent> ) { }

  ngOnInit() {
    this.id = this.data.element.id;
    this.name = this.data.element.name;
    this.email = this.data.element.email;
    this.phone = this.data.element.phone;
    this.notes = this.data.element.notes;
  }

  editarUsuario(){
    if(this.password === ''){
      this.password = this.data.element.password;
    }

    const usuarioEditado = new EditUsuarioDto(this.id,this.name, this.email, this.password, this.phone, this.notes);
    
    this.usuarioService.editUsuario(this.id, usuarioEditado).subscribe(usuarioEditado =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}
