import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

const ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo:'heroes'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
