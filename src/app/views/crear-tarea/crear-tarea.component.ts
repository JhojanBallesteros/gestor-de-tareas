import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { validaciones } from 'src/app/validator/validacions';
import { Persona } from 'src/app/models/personas.model';

@Component({
  standalone: true,
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  imports: [
    SharedModule
  ]
})
export class CrearTareaComponent {
  tareaForm: FormGroup;
  minDate: string;

  constructor(private fb: FormBuilder, private tareasService: TareasService) {

    let hoy = new Date();
    this.minDate = hoy.toISOString().split('T')[0];
    this.tareaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      fechaLimite: [hoy, [Validators.required, validaciones.fechaLimiteValidador.bind(this)]],
      completada: [false],
      personas: this.fb.array<Persona>([], [Validators.required, validaciones.uniquePersonNameValidator()]),
    });
  }

  isValidField(field: string): boolean | null {
    const control = this.tareaForm.get(field);
    return control && control.errors && control.touched;
  }

  getFieldError(field: string): string | null {
    const control = this.tareaForm.get(field);
    if (!control) return null;

    const errors = control.errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'minlength':
          return `El campo debe tener al menos ${errors[key].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors[key].min}`;
        case 'duplicateNames':
          return 'Este nombre ya está asignado';
        default:
          return null;
      }
    }
    return null;
  }
  get personas(): FormArray | any {
    return this.tareaForm.get('personas') as FormArray;
  }


  agregarPersona() {
    const personaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      edad: [null, [Validators.required, Validators.min(18)]],
      habilidades: this.fb.array([this.fb.control('', Validators.required)])
    });
    this.personas.push(personaForm);
  }

  eliminarPersona(index: number) {
    this.personas.removeAt(index);
  }

  agregarHabilidad(personaIndex: number) {
    const habilidades = (this.personas.at(personaIndex).get('habilidades') as FormArray);
    habilidades.push(this.fb.control('', Validators.required));
  }

  eliminarHabilidad(personaIndex: number, habilidadIndex: number) {
    const habilidades = (this.personas.at(personaIndex).get('habilidades') as FormArray);
    habilidades.removeAt(habilidadIndex);
  }

  guardarTarea() {
    if (this.tareaForm.valid) {
      this.tareasService.agregarTarea(this.tareaForm.value);
      this.tareaForm.reset();
      this.tareaForm.reset({ completada: false })


    }
  }
}
