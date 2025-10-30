import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function mustBeNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
      return null;
    }

    const isNumber = !isNaN(Number(value));

    return isNumber ? null : { mustBeNumber: true };
  };
}