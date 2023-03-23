import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';
import { CadastroMedicoComponent } from './components/cadastro-medico/cadastro-medico.component';
import { CadastroFarmaciaComponent } from './components/cadastro-farmacia/cadastro-farmacia.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    TipoCadastroComponent,
    CadastroMedicoComponent,
    CadastroFarmaciaComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
