import { Component, OnInit } from "@angular/core";
import { CategoriasService } from "../services/categorias.service";
import { AddCategoriaDto } from "../dto/add-categoria.dto";
import { MatDialogRef } from "@angular/material";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { SupercategoriasService } from "../services/supercategorias.service";
import { SuperCategoriaResp } from "../interfaces/supercategoria.interface";

@Component({
  selector: "app-add-categoria",
  templateUrl: "./add-categoria.component.html",
  styleUrls: ["./add-categoria.component.scss"]
})
export class AddCategoriaComponent implements OnInit {
  createCategoria: FormGroup;
  arraySuperCategorias: SuperCategoriaResp[];

  constructor(
    private superCategoriaService: SupercategoriasService,
    public dialogRef: MatDialogRef<AddCategoriaComponent>,
    private categoriaService: CategoriasService
  ) {}

  ngOnInit() {
    this.getAllSuperCategorias();
    this.createCategoria = new FormGroup({
      name: new FormControl("", [Validators.required]),
      idSuperCategoria: new FormControl("", [Validators.required])
    });
  }

  addCategoria() {
    const nuevaCategoria = <AddCategoriaDto>this.createCategoria.value;
    this.categoriaService.addCategoria(nuevaCategoria).subscribe(
      response => {
        this.dialogRef.close();
      },
      error => {
        console.log(error);
      }
    );
  }
  getAllSuperCategorias() {
    this.superCategoriaService.getAllSuperCategorias().subscribe(
      superCategorias => {
        this.arraySuperCategorias = superCategorias;
      },
      error => {
        console.log(error);
      }
    );
  }
}
