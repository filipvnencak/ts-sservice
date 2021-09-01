import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResortsPageRoutingModule } from './resorts-routing.module';

import { ResortsPage } from './resorts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResortsPageRoutingModule
  ],
  declarations: [ResortsPage]
})
export class ResortsPageModule {}
