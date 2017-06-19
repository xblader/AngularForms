import { PermissaoTrabalhoRoutingModule } from './permissao-trabalho-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissaoPTComponent } from './emissao-pt/emissao-pt.component';

@NgModule({
  imports: [
    CommonModule,
    PermissaoTrabalhoRoutingModule
  ],
  declarations: [EmissaoPTComponent]
})
export class PermissaoTrabalhoModule { }
