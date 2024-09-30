import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class validaciones {
  static fechaLimiteValidador(control: AbstractControl): { [key: string]: boolean } | null {
    const fechaSeleccionada = control.value === null ? new Date() : new Date(control.value);
    const fechaActual = new Date();
    console.log(fechaSeleccionada, fechaActual);
    fechaActual.setHours(0, 0, 0, 0);
    return fechaSeleccionada <= fechaActual ? { fechaInvalida: true } : null;
  }

  static uniquePersonNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const personas = control.value as { nombre: string }[];
      const nombres = personas.map(person => person.nombre);
      const hasDuplicates = nombres.some((nombre, index) => nombres.indexOf(nombre) !== index && nombre?.trim() !== '');
      const duplicates = nombres.filter((nombre, index) => nombres.indexOf(nombre) !== index && nombre?.trim() !== '');
      return hasDuplicates ? { duplicateNames: true, duplicates: duplicates } : null;
    };
  }

}
