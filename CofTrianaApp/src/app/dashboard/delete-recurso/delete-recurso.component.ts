import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { RecursosService } from '../services/recursos.service';

@Component({
  selector: 'app-delete-recurso',
  templateUrl: './delete-recurso.component.html',
  styleUrls: ['./delete-recurso.component.scss']
})
export class DeleteRecursoComponent implements OnInit {

  constructor(public snackBar: MatSnackBar,public dialogRef: MatDialogRef<DeleteRecursoComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private recursoService: RecursosService) { }

  idRecurso = this.data.element.id;
  title = this.data.element.title;
  palabraBorrar: string;

  ngOnInit() {
  }

  borrarRecurso(id: number) {
    this.recursoService.deleteRecurso(id).subscribe(
      response => {
        this.dialogRef.close();
        this.snackBar.open(`Recurso: ${this.title} eliminado `, 'x', {
          duration: 3000,
          verticalPosition: 'top'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  validarDelete():boolean{
    let validar = true;

    if(this.palabraBorrar != 'ELIMINAR'){
      validar = false;
    }
    return validar;
  }


}
