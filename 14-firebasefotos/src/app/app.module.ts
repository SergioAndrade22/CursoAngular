import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { APP_ROUTING } from './app.routes';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
