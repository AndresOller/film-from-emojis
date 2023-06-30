import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojisComponent } from './components/emojis/emojis.component';
import { OptionsComponent } from './components/options/options.component';
import { GuessFilmComponent } from './pages/guess-film/guess-film.component';
import { FilmsRoutingModule } from './films-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmojisComponent, OptionsComponent, GuessFilmComponent],
  imports: [CommonModule, FilmsRoutingModule, SharedModule],
})
export class FilmsModule {}
