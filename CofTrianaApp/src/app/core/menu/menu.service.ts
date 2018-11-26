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
  },
  {
    state: '/admin/recursos',
    name: 'Admin - RECURSOS',
    type: 'extTabLink',
    icon: 'supervisor_account'
  },
  {
    state: '/admin/categorias',
    name: 'Admin - CATEGORIAS',
    type: 'extTabLink',
    icon: 'scatter_plot'
  },
  {
    state: '/admin/tipos',
    name: 'Admin - TIPOS',
    type: 'extTabLink',
    icon: 'style'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
