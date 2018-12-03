import { SessionService } from './../../session/services/session.service';
import { Component, EventEmitter, Output } from '@angular/core';

import * as screenfull from 'screenfull';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  nombreLogueado: string;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor(private router: Router, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.nombreLogueado = this.getNombreLogueado();
    
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['session/login']);
  }


  getNombreLogueado() :string{
    return this.sessionService.getNombre();
  }

  miPerfil(){
    this.router.navigate(['mi-perfil']);
  }

}
