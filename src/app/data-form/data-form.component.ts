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

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null,  Validators.required],
      email: [null]
    });
  }

  onSubmit(){
     this.http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
             .map(res => res)
             .subscribe(dados => console.log(dados));
  }

}
