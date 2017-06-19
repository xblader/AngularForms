import { EmissaoPTComponent } from './emissao-pt/emissao-pt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
    {path:'emissaoPT', component: EmissaoPTComponent}
   // {path:'naoEncontrado', component: NaoEncontradoComponent}     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissaoTrabalhoRoutingModule { }
