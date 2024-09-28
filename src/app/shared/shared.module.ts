import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, FormModule, GridModule, ButtonModule, ButtonGroupModule, DropdownModule, ListGroupModule, ColComponent } from '@coreui/angular';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    DropdownModule,
    ListGroupModule,
    ColComponent,
  ],
  exports: [
    CommonModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    DropdownModule,
    ListGroupModule,
    ColComponent,
  ]
})
export class SharedModule { }
