import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome:'',
    email:''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f);
  }

  validarTouchEValid(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssError(campo){
    return {
    'has-error': this.validarTouchEValid(campo),
    'has-feedback':this.validarTouchEValid(campo)
    }
  }

}
