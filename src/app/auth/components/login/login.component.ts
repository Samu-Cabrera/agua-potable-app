import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minValidators, maxValidators } from '../../helpers/custom.validation';

@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    cedula: ['', [
      Validators.required,
      minValidators,
      maxValidators,
    ]],
    password: ['', [
      Validators.required,
      minValidators
    ]]
  });

  constructor(private fb: FormBuilder){}

  isValidField(field: string): boolean | null {
    return this.loginForm.controls[field].errors
    && this.loginForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if(!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for(let keys of Object.keys(errors)) {
      switch(keys){
        case 'required': return `Este campo es obligatorio.`
        case 'minLength': return `Este campo debe tener más de 5 caracteres.`;
        case 'maxlength': return 'Este campo debe tener menos de 15 caracteres.'
      }
    }

    return null;
  }

  onSubmit(): void {
    console.log(this.loginForm.errors);
    // if(this.loginForm.invalid) return;
  }

}
