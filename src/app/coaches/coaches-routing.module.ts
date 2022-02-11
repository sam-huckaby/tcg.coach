import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachesComponent } from './coaches.component';

const routes: Routes = [
  {
    path: '',
    component: CoachesComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesRoutingModule { }
