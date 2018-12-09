import { DevolverRecursoDto } from './../dto/devolver-recurso.dto';
import { Component, OnInit, Inject } from '@angular/core';
import { RecursosService } from '../services/recursos.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-devolver-recurso',
  templateUrl: './devolver-recurso.component.html',
  styleUrls: ['./devolver-recurso.component.scss']
})
export class DevolverRecursoComponent implements OnInit {
  palabraDevolver: string;
  
  constructor(public dialogRef: MatDialogRef<DevolverRecursoComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private recursoService: RecursosService) { }


  title = this.data.element.title;
  ngOnInit() {
  }

  devolverRecurso(){
    const devolverDto = new DevolverRecursoDto(this.data.element.id,this.data.element.title,this.data.element.autor,this.data.element.anyo,this.data.element.url, this.data.element.content)
    this.recursoService.devolverRecurso(this.data.element.id, devolverDto).subscribe(recurso =>{
      this.dialogRef.close();
    }, error =>{
      console.log(error);
    })
  }

  validarDevolver():boolean {
    let validar = true;

    if(this.palabraDevolver != 'DEVOLVER'){
      validar = false;
    }
    return validar;
  }

}
