import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTareasComponent } from './listar-tareas.component';


const routes: Routes = [
  {
    path: '',
    component: ListarTareasComponent,
    data: {
      title: $localize`ListTask`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarTareasRoutingModule {
}
