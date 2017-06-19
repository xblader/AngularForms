import { HomeComponent } from './home/home.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  {
        path:'permissaotrabalho', 
       // canActivate:[AuthGuard], 
        //canActivateChild:[CursosGuard], 
        loadChildren: 'app/permissao-trabalho/permissao-trabalho.module#PermissaoTrabalhoModule',
        //canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
