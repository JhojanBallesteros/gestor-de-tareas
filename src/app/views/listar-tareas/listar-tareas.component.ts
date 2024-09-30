import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/task.model';


import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './listar-tareas.component.html'
})
export class ListarTareasComponent {
  tareas$: Observable<Tarea[]> = this.tareasService.tareas$;
  filter: string = 'all';

  constructor(private tareasService: TareasService) { }


  completarTarea(index: number) {
    this.tareasService.marcarTareaCompletada(index);
  }

  filtrarTareas(completadas: boolean) {
    this.tareas$ = this.tareasService.filtrarTareas(completadas);
  }
}
