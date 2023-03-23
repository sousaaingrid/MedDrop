import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CadastroFarmaciaComponent } from './components/cadastro-farmacia/cadastro-farmacia.component';
import { CadastroMedicoComponent } from './components/cadastro-medico/cadastro-medico.component';
import { HomeComponent } from './components/home/home.component';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"tipo/cadastro", component: TipoCadastroComponent},
  {path:"cadastro/medico", component: CadastroMedicoComponent},
  {path:"cadastro/farmacia", component: CadastroFarmaciaComponent},
  {path:"cadastro/cliente", component: CadastroClienteComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
