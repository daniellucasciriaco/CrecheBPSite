/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

/* Library */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

/* Modules */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { LogoComponent } from './logo/logo.component';
import { TurminhaComponent } from './turminha/turminha.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasDetalheComponent } from './noticias-detalhe/noticias-detalhe.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventosDetalheComponent } from './eventos-detalhe/eventos-detalhe.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Services */
import { AuthService } from './services/auth.service';
import { NewsService } from './services/news.service';
import { EventService } from './services/event.service';
import { WorkWithUsService } from './services/work-with-us.service';
import { FeedbackService } from './services/feedback.service';
import { CollaboratorService } from './services/collaborator.service';
import { UploadService } from './services/upload.service';

/* Guards */
import { AuthGuard } from './guards/auth.guard';
import { ColaboradoresDetalheComponent } from './colaboradores-detalhe/colaboradores-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HistoricoComponent,
    LogoComponent,
    TurminhaComponent,
    NoticiasComponent,
    NoticiasDetalheComponent,
    EventosComponent,
    EventosDetalheComponent,
    ColaboradoresComponent,
    ColaboradoresDetalheComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    NewsService,
    EventService,
    FeedbackService,
    CollaboratorService,
    WorkWithUsService,
    UploadService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
