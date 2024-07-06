import {  AbstractControl, ValidationErrors } from '@angular/forms';

export const minValidators = (field: AbstractControl): ValidationErrors | null => {
    if(!field.value) return null;

    if(field.value.toString().length < 5) {
        return { minLength: true };
    }

    return null;
}

export const maxValidators = (field: AbstractControl): ValidationErrors | null => {
    if(!field.value) return null;

    if(field.value.toString().length > 15) {
        return { maxLength: true };
    }

    return null;
}
