import { element } from 'protractor';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  editUsuario:FormGroup;
  password= new FormControl('',[Validators.required, Validators.minLength(4)]);
  id: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private usuarioService: UsuariosService, public dialogRef: MatDialogRef<EditUsuarioComponent> ) { }

  ngOnInit() {
    this.id = this.data.element.id;
    this.editUsuario = new FormGroup({
      id: new FormControl(this.data.element.id),
      name: new FormControl(this.data.element.name, [Validators.required]),
      email: new FormControl(this.data.element.email, [Validators.email, Validators.required]),
      phone: new FormControl(this.data.element.phone, [Validators.required]),
      notes: new FormControl(this.data.element.notes)

    })
  }

  editarUsuario(){
    
    const usuarioEditado = <EditUsuarioDto>this.editUsuario.value;
    
    this.usuarioService.editUsuario(this.id, usuarioEditado).subscribe(usuarioEditado =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

}