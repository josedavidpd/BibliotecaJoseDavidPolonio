import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { MatDialogRef } from '@angular/material';
import { EditAddUsuarioDto } from '../dto/edit-add-usuario.dto';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {
  
  hide = true;
  
  createUser: FormGroup;

  passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)]);

  constructor(public dialogRef: MatDialogRef<AddUsuarioComponent>,private usuarioService: UsuariosService) { }

  ngOnInit() {

    this.createUser = new FormGroup({
      name: new FormControl('',Validators.required),      
      email: new FormControl('', [Validators.email, Validators.required]),
      password: this.passwordControl,
      repetirPassword: new FormControl('', [Validators.required, CustomValidators.equalTo(this.passwordControl)]),
      phone: new FormControl('', [Validators.required]),
      notes: new FormControl('')
      
    })
  }

  nuevoUsuario(){
    const nuevoUsuario = <EditAddUsuarioDto>this.createUser.value;
    this.usuarioService.addUsuario(nuevoUsuario).subscribe(usuario =>{
      this.dialogRef.close();
    },error =>{
      console.log(error);
    })
  }

  validarForm(): boolean{
    let validado:boolean;
    if(this.createUser.valid){
      validado = true;
    }else{
      validado = false;

    }
    return validado;
  }

  generarString(): string{
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  generarPassword(){
    const passwordAleatoria = this.generarString();

    this.createUser.controls['password'].setValue(passwordAleatoria);
    this.createUser.controls['repetirPassword'].setValue(passwordAleatoria);


  }



}
