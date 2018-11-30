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
    state: '/recursos',
    name: 'Recursos',
    type: 'extTabLink',
    icon: 'list'
  },
  {
    state: '/categorias',
    name: 'Categorias',
    type: 'extTabLink',
    icon: 'view_module'
  },
  {
    state: '/admin/recursos',
    name: 'Admin-Recursos',
    type: 'extTabLink',
    icon: 'assignment'
  },
  {
    state: '/admin/categorias',
    name: 'Admin-Categorias',
    type: 'extTabLink',
    icon: 'scatter_plot'
  },
  {
    state: '/admin/tipos',
    name: 'Admin-Tipos',
    type: 'extTabLink',
    icon: 'style'
  },
  {
    state: '/admin/usuarios',
    name: 'Admin-Usuarios',
    type: 'extTabLink',
    icon: 'supervisor_account'
  }
];

const USERMENU = [
  {
    state: '/',
    name: 'Inicio',
    type: 'link',
    icon: 'home'
  },
  {
    state: '/recursos',
    name: 'Recursos',
    type: 'extTabLink',
    icon: 'list'
  },
  {
    state: '/categorias',
    name: 'Categorias',
    type: 'extTabLink',
    icon: 'view_module'
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
