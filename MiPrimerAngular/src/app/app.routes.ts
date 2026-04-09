import { Routes } from '@angular/router';
import {Inicio} from './pages/inicio/inicio';
import {Contactos} from './pages/contactos/contactos';
import {Ejercicios} from './pages/ejercicios/ejercicios';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'contactos', component: Contactos },
    { path: 'ejercicios', component: Ejercicios }
];