import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivityPage } from './activity.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ActivityPageRoutingModule } from './activity-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ActivityPage }]),
    ActivityPageRoutingModule,
  ],
  declarations: [ActivityPage]
})
export class ActivityPageModule {}
