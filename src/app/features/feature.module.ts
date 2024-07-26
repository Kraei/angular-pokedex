import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { MainFeatureComponent } from './pages/main-feature.component';



@NgModule({
  declarations: [
    ListContainerComponent,
    ListCardComponent,
    MainFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainFeatureComponent
  ]
})
export class FeatureModule { }
