import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Tarea } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas = new BehaviorSubject<Tarea[]>([]);
  tareas$ = this.tareas.asObservable();

  agregarTarea(tarea: Tarea) {
    const tareasActuales = this.tareas.getValue();
    this.tareas.next([...tareasActuales, tarea]);
  }

  marcarTareaCompletada(index: number) {
    const tareasActuales = this.tareas.getValue();
    tareasActuales[index].completada = true;
    this.tareas.next([...tareasActuales]);
  }

  filtrarTareas(completada: boolean) {
    return this.tareas$.pipe(
      map(tareas => tareas.filter(tarea => tarea.completada === completada))
    );

  }

}
