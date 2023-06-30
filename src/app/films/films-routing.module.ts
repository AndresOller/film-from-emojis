import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessFilmComponent } from './pages/guess-film/guess-film.component';
const routes: Routes = [
  {
    path: 'guess-film',
    component: GuessFilmComponent,
  },
  {
    path: '**',
    redirectTo: 'guess-film',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
