import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [

  {
    state: 'admin-recursos',
    name: 'Admin-Recursos',
    type: 'link',
    icon: 'assignment'
  },
  {
    state: 'admin-categorias',
    name: 'Admin-Categorias',
    type: 'link',
    icon: 'scatter_plot'
  },
  {
    state: 'admin-tipos',
    name: 'Admin-Tipos',
    type: 'link',
    icon: 'style'
  },
  {
    state: 'admin-usuarios',
    name: 'Admin-Usuarios',
    type: 'link',
    icon: 'supervisor_account'
  },
  {
    state: 'admin-supercategorias',
    name: 'Admin-Supercategorias',
    type: 'link',
    icon: 'supervisor_account'
  }
];

const USERMENU = [
  {
    state: '/',
    name: 'Inicio',
    type: 'link',
    icon: 'home'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    if(localStorage.getItem('role') === 'general'){
      return USERMENU;
   
    }else{
      return MENUITEMS;
    }
   
  }

  add(menu: { state: string; name: string; type: string; icon: string; children: { state: string; name: string; }[]; }) {
    MENUITEMS.push(menu);
  }
}
