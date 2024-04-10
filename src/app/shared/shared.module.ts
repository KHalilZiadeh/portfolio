import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CursorDirective } from './directives/cursor.directive';



@NgModule({
  declarations: [
    CursorDirective
  ],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    MaterialModule, CursorDirective
  ]
})
export class SharedModule { }
