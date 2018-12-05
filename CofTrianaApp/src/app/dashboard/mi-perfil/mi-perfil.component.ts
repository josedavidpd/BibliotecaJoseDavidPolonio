import { MatSnackBar } from '@angular/material';
import { UsuariosService } from './../services/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from './../../session/services/session.service';
import { Component, OnInit } from '@angular/core';
import { UpdateProfileDto } from '../dto/updateProfile.dto';
import { CustomValidators } from 'ng2-validation';
import { UpdatePasswordDto } from '../dto/updatePassword.dto';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  updatePerfil: FormGroup;
  updatePassword: FormGroup;
  nombreUsuario: string;
  emailUsuario: string;
  phoneUsuario: string;
  notes: string;

  newPasswordControl = new FormControl('', [Validators.required]);
  constructor(private snackBar:MatSnackBar,private sessionService: SessionService, private usuarioService: UsuariosService) { }

  ngOnInit() {
   
    this.nombreUsuario = this.getNombreUsuario();
    this.emailUsuario = this.getEmailUsuario();
    this.phoneUsuario = this.getPhoneUsuario();

    this.updatePerfil = new FormGroup({
      name: new FormControl(this.nombreUsuario, [Validators.required]),
      email: new FormControl(this.emailUsuario, [Validators.required]),
      phone: new FormControl(this.phoneUsuario, [Validators.required]),
      notes: new FormControl(this.notes)
    });

    this.updatePassword = new FormGroup({
      password: new FormControl('', [Validators.required]),
      newpassword: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required, CustomValidators.equalTo(this.newPasswordControl)])
    });
  }

  actualizarPassword(){
    const updatedPassword = <UpdatePasswordDto>this.updatePassword.value;
    this.usuarioService.updatePassword(updatedPassword).subscribe(updatedPassword =>{
      this.snackBar.open('Contraseña actualizada correctamente', 'x',{
        duration:3000,
        verticalPosition: 'top';
      });

    }, error =>{
      this.snackBar.open('Error al actualizar la contraseña', 'x',{
        duration:3000,
        verticalPosition: 'top';
      });
      console.log(error);
    })
  }

  actualizarPerfil(){
    const updatedUsuario = <UpdateProfileDto>this.updatePerfil.value;
    this.usuarioService.updateProfile(updatedUsuario).subscribe(usuarioUpdated =>{
      this.nombreUsuario = usuarioUpdated.name;
      this.emailUsuario = usuarioUpdated.email;
      this.phoneUsuario = usuarioUpdated.phone;
      this.notes = usuarioUpdated.notes;
      localStorage.setItem('email', this.emailUsuario);
      localStorage.setItem('nombre', this.nombreUsuario);
      localStorage.setItem('phone', this.phoneUsuario);
      location.reload();
    }, error =>{
      this.snackBar.open('Error al actualizar el perfil', 'x',{
        duration:3000,
        verticalPosition: 'top';
      });
      console.log(error);
    })
  }

  getNombreUsuario(){
    return this.sessionService.getNombre();
  }

  getEmailUsuario(){
    return this.sessionService.getEmail();
  }

  getPhoneUsuario(){
    return this.sessionService.getPhone();
  }

}
