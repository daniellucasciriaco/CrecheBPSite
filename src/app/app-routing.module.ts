/* Angular */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Guards */
import { AuthGuard } from './guards/auth.guard';

/* Components */
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { LogoComponent } from './logo/logo.component';
import { TurminhaComponent } from './turminha/turminha.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EventosComponent } from './eventos/eventos.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { EventosDetalheComponent } from './eventos-detalhe/eventos-detalhe.component';
import { ColaboradoresDetalheComponent } from './colaboradores-detalhe/colaboradores-detalhe.component';
import { NoticiasDetalheComponent } from './noticias-detalhe/noticias-detalhe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'historico',  component: HistoricoComponent, canActivate: [ AuthGuard ] },
  { path: 'logo',  component: LogoComponent, canActivate: [ AuthGuard ] },
  { path: 'turminha',  component: TurminhaComponent, canActivate: [ AuthGuard ] },
  { path: 'noticias',  component: NoticiasComponent, canActivate: [ AuthGuard ] },
  { path: 'noticia',  component: NoticiasDetalheComponent, canActivate: [ AuthGuard ] },
  { path: 'eventos',  component: EventosComponent, canActivate: [ AuthGuard ] },
  { path: 'evento',  component: EventosDetalheComponent, canActivate: [ AuthGuard ] },
  { path: 'colaboradores',  component: ColaboradoresComponent, canActivate: [ AuthGuard ] },
  { path: 'colaborador',  component: ColaboradoresDetalheComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
