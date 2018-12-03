import { AdminSupercategoriasComponent } from './admin-supercategorias/admin-supercategorias.component';
import { AdminTiposComponent } from './admin-tipos/admin-tipos.component';
import { AdminRecursosComponent } from './admin-recursos/admin-recursos.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';

export const DashboardRoutes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'admin-recursos',component: AdminRecursosComponent},
  {path: 'admin-categorias',component: AdminCategoriasComponent},
  {path: 'admin-usuarios',component: AdminUsuariosComponent},
  {path: 'admin-tipos',component: AdminTiposComponent},
  {path: 'admin-supercategorias',component: AdminSupercategoriasComponent},
  {path: 'mi-perfil',component: MiPerfilComponent}




];
