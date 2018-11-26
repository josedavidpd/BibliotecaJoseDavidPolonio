import { CategoriasService } from './services/categorias.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule, MatTableModule, MatInputModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { AdminComponent } from './admin/admin.component';
import { AdminRecursosComponent } from './admin-recursos/admin-recursos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddRecursoComponent } from './add-recurso/add-recurso.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RecursosService } from './services/recursos.service';
import { TiposService } from './services/tipos.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditRecursoComponent } from './edit-recurso/edit-recurso.component';
import { DeleteRecursoComponent } from './delete-recurso/delete-recurso.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';

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
    MatSnackBarModule
  ],
  entryComponents:[
    AddRecursoComponent,
    EditRecursoComponent, 
    DeleteRecursoComponent
  ],
  declarations: [ DashboardComponent, AdminComponent, AdminRecursosComponent, AddRecursoComponent, EditRecursoComponent, DeleteRecursoComponent, AdminCategoriasComponent ]
})

export class DashboardModule {}
