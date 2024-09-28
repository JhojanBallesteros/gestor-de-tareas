import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ListarTareasRoutingModule } from './listar-tareas.routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarTareasComponent } from './listar-tareas.component';
import { CardModule, FormModule, GridModule, ButtonModule, ButtonGroupModule, DropdownModule, SharedModule, ListGroupModule } from '@coreui/angular';





@NgModule({
  declarations: [ListarTareasComponent],
  imports: [
    CommonModule,
    ListarTareasRoutingModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ]
})
export class ListTaskModule { }
