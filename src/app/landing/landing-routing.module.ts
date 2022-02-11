import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
