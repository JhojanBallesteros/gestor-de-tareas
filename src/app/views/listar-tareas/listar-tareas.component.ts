import { Component, OnInit } from '@angular/core';


import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './listar-tareas.component.html'
})
export class ListarTareasComponent {
  tareas$ = this.tareasService.tareas$;

  constructor(private tareasService: TareasService) { }

  completarTarea(index: number) {
    this.tareasService.marcarTareaCompletada(index);
  }

  filtrarTareas(completadas: boolean) {
    return this.tareasService.filtrarTareas(completadas);
  }
}
