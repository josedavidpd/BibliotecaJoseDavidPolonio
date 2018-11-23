import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin/admin.component';

export const DashboardRoutes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'admin',component: AdminComponent}



];
