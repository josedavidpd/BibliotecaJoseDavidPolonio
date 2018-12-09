import { SuperCategoriaResp } from "./../interfaces/supercategoria.interface";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AddRecursoDto } from "./../dto/add-recurso.dto";
import { TiposService } from "./../services/tipos.service";
import { Component, OnInit } from "@angular/core";
import { Category } from "../interfaces/category.interface";
import { Type } from "../interfaces/type.interface";
import { CategoriasService } from "../services/categorias.service";
import { RecursosService } from "../services/recursos.service";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { Title } from "@angular/platform-browser";
import { SupercategoriasService } from "../services/supercategorias.service";

@Component({
  selector: "app-add-recurso",
  templateUrl: "./add-recurso.component.html",
  styleUrls: ["./add-recurso.component.scss"]
})
export class AddRecursoComponent implements OnInit {
  createRecurso: FormGroup;
  arrayCategorias: Category[];
  arrayTipos: Type[];
  arraySuperCategorias: SuperCategoriaResp[];

  constructor(
    private categoriaService: CategoriasService,
    private tipoService: TiposService,
    private recursoService: RecursosService,
    public dialogRef: MatDialogRef<AddRecursoComponent>,
    public snackBar: MatSnackBar,
    private superCategoriaService: SupercategoriasService
  ) {}

  ngOnInit() {
    this.createRecurso = new FormGroup({
      title: new FormControl("", [Validators.required]),
      autor: new FormControl("", [Validators.required]),
      anyo: new FormControl("", [Validators.required, Validators.maxLength(4)]),
      url: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required,Validators.maxLength(100)]),
      typeId: new FormControl(""),
      categoryId: new FormControl("")
    });
    this.getCategorias();
    this.getTipos();
    this.getSuperCategorias();
  }

  addRecurso() {
    const addRecursoDto = <AddRecursoDto>this.createRecurso.value;

    this.recursoService.addRecurso(addRecursoDto).subscribe(nuevoRecurso => {
        this.dialogRef.close();

        this.snackBar.open(`Recurso '${this.createRecurso.controls["title"].value}' creado correctamente`,"x", {
            duration: 2000,
            verticalPosition: "top"
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  getCategorias() {
    this.categoriaService.getAllCategorias().subscribe(categorias => {
        this.arrayCategorias = categorias;
      },
      error => {
        console.log(error);
      }
    );
  }

  getTipos() {
    this.tipoService.getAllTipos().subscribe(tipos => {
        this.arrayTipos = tipos;
      },
      error => {
        console.log(error);
      }
    );
  }

  getSuperCategorias() {
    this.superCategoriaService.getAllSuperCategorias().subscribe(superCategorias => {
        this.arraySuperCategorias = superCategorias;
      },
      error => {
        console.log(error);
      }
    );
  }
}
