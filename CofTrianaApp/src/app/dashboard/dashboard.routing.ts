import { AdminRecursosComponent } from './admin-recursos/admin-recursos.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';

export const DashboardRoutes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'admin/recursos',component: AdminRecursosComponent},
  {path: 'admin/categorias',component: AdminCategoriasComponent}



];
