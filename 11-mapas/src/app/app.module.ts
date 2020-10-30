import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Angular Maps
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { EditarMarcadorComponent } from './components/mapa/editar-marcador.component';

@NgModule({
  entryComponents:[
    EditarMarcadorComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    EditarMarcadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2aGdvmkxti6PHlwZDBL2pY8ZUTkVx6zo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
