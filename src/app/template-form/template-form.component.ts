import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f);
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
    'has-error': this.verificaValidTouched(campo),
    'has-feedback':this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, formulario){
    cep = cep.replace(/\D/g, '');
    if(cep!=''){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        
        this.resetaDadosForm(formulario);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, formulario));
      }
    }
  }

  populaDadosForm(dados, formulario){
    /*formulario.setValue({
      "nome": null,
      "email": null,
      "endereco": {
        "cep": dados.cep,
        "numero": '',
        "complemento": dados.complemento,
        "rua": dados.logradouro,
        "bairro": dados.bairro,
        "cidade": dados.localidade,
        "estado": dados.uf
      }
    });*/

    formulario.form.patchValue({
      endereco: {
        "cep": dados.cep,
        "complemento": dados.complemento,
        "rua": dados.logradouro,
        "bairro": dados.bairro,
        "cidade": dados.localidade,
        "estado": dados.uf
      }
    });
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        "cep": null,
        "complemento": null,
        "rua": null,
        "bairro": null,
        "cidade": null,
        "estado": null
      }
    });
  }

}
