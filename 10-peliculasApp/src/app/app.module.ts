import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TMDBService } from './providers/tmdb.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { APP_ROUTING } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CarouselComponent } from './components/home/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ResultComponent,
    NoimagePipe,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [
    TMDBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
