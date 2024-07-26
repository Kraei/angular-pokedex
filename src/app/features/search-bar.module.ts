import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchBarModule { }
