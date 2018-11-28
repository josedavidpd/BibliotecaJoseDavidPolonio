import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SessionService } from '../services/session.service';
import { LoginDto } from '../dto/login.dto';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';
  constructor(public snackBar: MatSnackBar, private router: Router, private sessionService: SessionService, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('CofTriana - Inicio de sesión');

    if(localStorage.getItem('token') == null){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['dashboard/']);
    }
  }

  doLogin(){
    const loginDto = new LoginDto(this.email, this.password);
    this.sessionService.login(loginDto).subscribe(response => {

      console.log(response);

      this.sessionService.setLoginData(response);

      this.router.navigate(['dashboard']);
      
    }, error => {
      this.snackBar.open('Email o contraseña incorrectos', 'x', {
        duration: 3000,
        verticalPosition: 'top'
      });
      console.log(error);
    });

}
}
