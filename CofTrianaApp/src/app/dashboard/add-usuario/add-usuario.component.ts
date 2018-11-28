import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {

  createUser: FormGroup;

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(public dialogRef: MatDialogRef<AddUsuarioComponent>,private usuarioService: UsuariosService) { }

  ngOnInit() {

    this.createUser = new FormGroup({
      name: new FormControl('',Validators.required),      
      email: new FormControl('', [Validators.email, Validators.required]),
      password: this.passwordControl,
      repetirPassword: new FormControl('', [Validators.required, Validators.minLength(6), CustomValidators.equalTo(this.passwordControl)]),
      phone: new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required])
      
    })
  }

  nuevoUsuario(){
    this.usuarioService.addUsuario(this.createUser).subscribe(usuario =>{
      this.dialogRef.close();
    },error =>{
      console.log(error);
    })
  }

}
