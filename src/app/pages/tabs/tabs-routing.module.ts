import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../activity/activity.module').then(m => m.ActivityPageModule)
      },
      {
        path: 'resorts',
        loadChildren: () => import('../resorts/resorts.module').then( m => m.ResortsPageModule)
      },
      {
        path: 'resorts/:id',
        loadChildren: () => import('../resort/resort.module').then( m => m.ResortPageModule)
      },
      {
        path: 'tab1/:id',
        loadChildren: () => import('../post-detail/post-detail.module').then( m => m.PostDetailPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
