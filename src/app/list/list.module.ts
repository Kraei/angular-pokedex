import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { MainListComponent } from './pages/main-list.component';



@NgModule({
  declarations: [
    ListContainerComponent,
    ListCardComponent,
    MainListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainListComponent
  ]
})
export class ListModule { }
