import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TimerComponent } from './timer/timer.component';
@NgModule({
    declarations: [TimerComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [TimerComponent]
})
export class ShareComponentModule {}