import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResortPage } from './resort.page';

const routes: Routes = [
  {
    path: '',
    component: ResortPage,
    children: [
      {
        path: '/weather',
        loadChildren: () => import('../weather/weather.module').then( m => m.WeatherPageModule)
      },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResortPageRoutingModule {}
