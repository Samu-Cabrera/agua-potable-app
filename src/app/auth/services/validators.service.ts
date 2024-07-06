import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms' 

@Injectable({
    providedIn: 'root'
})
export class ValidatorsServices {
    constructor(){}

    //es valido el formulario
    public isValidField(form: FormGroup, field: string): boolean | null {
        return form.controls[field].errors && form.controls[field].touched;
    }

    public getFieldError(form: FormGroup, field: string): string | null {
        if(!form.controls[field]) return null;
    
        const errors = form.controls[field].errors || {};
    
        for(let keys of Object.keys(errors)) {
          switch(keys){
            case 'required': return field === 'cedula' ? 'La cédula es obligatoria.' : 'La contraseña es obligatoria.'
            case 'minLength': return `Este campo debe tener más de 5 caracteres.`;
            case 'maxlength': return 'Este campo debe tener menos de 15 caracteres.'
          }
        }
    
        return null;
    }
}