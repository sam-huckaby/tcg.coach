import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuilderComponent } from './builder.component';

const routes: Routes = [
  {
    path: '',
    component: BuilderComponent,
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
export class BuilderRoutingModule { }
