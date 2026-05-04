import { Routes } from '@angular/router';
import { AnimalComponent } from './animal-component/animal-component';
import { FruitsComponent } from './fruits-component/fruits-component';
import { GenericComponent } from './generic/generic';

export const routes: Routes = [
  { path: 'animals', component: AnimalComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: '', redirectTo: '/animals', pathMatch: 'full' },
  { path: 'generic/:id', component: GenericComponent },
];

