import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http) { }

  hero : any = {};
 
  submitted = false;  

  ngOnInit() {
    this.buildForm();    
  }

  buildForm(){
    this.formulario = this.formBuilder.group({
      nome: [null,  [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      email: [null]
    });

    this.formulario.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.formulario) { return; }
    const form = this.formulario;
 
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
 
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
 
  formErrors = {
    'nome': '',
    'email': ''
  };

  validationMessages = {
    'nome': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'email': {
      'required': 'Power is required.'
    }
  };

  onSubmit(){
    this.submitted = true;
    this.hero = this.formulario.value;
    
     this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
             .map(res => res)
             .subscribe(dados => console.log(dados));
  }

}
