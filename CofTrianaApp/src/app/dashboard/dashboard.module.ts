import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule, MatTableModule, MatInputModule, MatSnackBar, MatSnackBarModule, MatPaginatorIntl } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { AdminRecursosComponent } from './admin-recursos/admin-recursos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddRecursoComponent } from './add-recurso/add-recurso.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditRecursoComponent } from './edit-recurso/edit-recurso.component';
import { DeleteRecursoComponent } from './delete-recurso/delete-recurso.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';

import { MatPaginatorModule } from '@angular/material';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { AdminTiposComponent } from './admin-tipos/admin-tipos.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    NgxPaginationModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  entryComponents:[
    AddRecursoComponent,
    EditRecursoComponent, 
    DeleteRecursoComponent,
    AddCategoriaComponent, 
    EditCategoriaComponent,
    DeleteUsuarioComponent,
    EditUsuarioComponent
  ],
  declarations: [ DashboardComponent, AdminRecursosComponent, AddRecursoComponent, EditRecursoComponent, DeleteRecursoComponent, AdminCategoriasComponent, AddCategoriaComponent, AdminUsuariosComponent, DeleteUsuarioComponent, EditUsuarioComponent, AdminTiposComponent, EditCategoriaComponent ]
})

export class DashboardModule {}
