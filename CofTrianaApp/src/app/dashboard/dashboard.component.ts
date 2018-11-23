import { Component } from '@angular/core';
import { Recursos } from './interfaces/recursos.interface';
import { Router } from '@angular/router';
import { RecursosService } from './services/recursos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  arrayRecursos: Recursos[];
  free: boolean;

  constructor(private router: Router, private recursoService: RecursosService) { }

  ngOnInit() {
    if(localStorage.getItem('token')== null){
      this.router.navigate(['']);
    }

    this.getRecursos();
  }


  getRecursos(){
    this.recursoService.getAllRecursos().subscribe(recursos => {
      this.arrayRecursos = recursos;
    }, error => {
      console.log(error);
    }
    
    );
  }
}
