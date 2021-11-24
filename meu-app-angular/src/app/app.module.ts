import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { FooterComponent } from './shared/footer';
import { HeaderComponent } from './shared/header';

@NgModule({
  declarations: [
    // Declaração dos componentes que serão utilizados
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    // Declaração dos módulos que serão importados
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // Declaração dos serviçõs que serão injetados na aplicação
  ],
  bootstrap: [AppComponent], // Informa o componente principal da aplicação, que irá chamar os demais
})
export class AppModule {} // Declaração do módulo principal da aplicação
