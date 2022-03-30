import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AziendaComponent } from './azienda/azienda.component';
import { HomeComponent } from './home/home.component';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'contatti',
        loadChildren: () => import('./contatti/contatti.module').then(m => m.ContattiModule)
      },
      {
        path: 'azienda',
        component: AziendaComponent
      }

    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
