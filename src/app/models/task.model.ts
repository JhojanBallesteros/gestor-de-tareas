import { Persona } from "./personas.model";

export interface Tarea {
  nombre: string;
  fechaLimite: Date;
  personas: Persona[];
  completada: boolean;
}
