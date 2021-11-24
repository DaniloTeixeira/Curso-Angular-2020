import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  // Importando o módulo de rotas para o módulo principal
  imports: [RouterModule.forRoot(routes)],

  // Exportando o módulo de rotas, para que o módulo principal tenha acesso
  exports: [RouterModule],
})
export class AppRoutingModule {}
