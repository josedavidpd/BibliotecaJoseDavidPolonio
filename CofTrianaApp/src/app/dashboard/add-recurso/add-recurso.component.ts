import { AddRecursoDto } from "./../dto/add-recurso.dto";
import { TiposService } from "./../services/tipos.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "../interfaces/category.interface";
import { Type } from "../interfaces/type.interface";
import { CategoriasService } from "../services/categorias.service";
import { RecursosService } from "../services/recursos.service";
import { MatDialogRef } from "@angular/material";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-add-recurso",
  templateUrl: "./add-recurso.component.html",
  styleUrls: ["./add-recurso.component.scss"]
})
export class AddRecursoComponent implements OnInit {
  title: string;
  autor: string;
  anyo: string;
  content: string;
  tipoSeleccionado: number;
  categoriaSeleccionada: number;

  arrayCategorias: Category[];
  arrayTipos: Type[];

  constructor(
    private categoriaService: CategoriasService,
    private tipoService: TiposService,
    private recursoService: RecursosService,
    public dialogRef: MatDialogRef<AddRecursoComponent>
  ) {}

  ngOnInit() {
    this.getCategorias();
    this.getTipos();
  }

  addRecurso() {
    const addRecursoDto = new AddRecursoDto(
      this.title,
      this.autor,
      this.anyo,
      this.content,
      this.tipoSeleccionado,
      this.categoriaSeleccionada
    );

    this.recursoService.addRecurso(addRecursoDto).subscribe(
      nuevoRecurso => {
        this.dialogRef.close();
      },
      error => {
        console.log(error);
      }
    );
  }

  getCategorias() {
    this.categoriaService.getAllCategorias().subscribe(
      categorias => {
        this.arrayCategorias = categorias;
      },
      error => {
        console.log(error);
      }
    );
  }

  getTipos() {
    this.tipoService.getAllTipos().subscribe(
      tipos => {
        this.arrayTipos = tipos;
      },
      error => {
        console.log(error);
      }
    );
  }
}
