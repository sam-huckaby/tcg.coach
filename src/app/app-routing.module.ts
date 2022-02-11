import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'coaches',
    loadChildren: () => import('./coaches/coaches.module').then(m => m.CoachesModule)
  },
  {
    path: 'builder',
    loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
  },
  {
    path: '**',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
