import { Component } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmsService } from '../../services/films.service';

@Component({
  templateUrl: './guess-film.component.html',
  styles: [],
})
export class GuessFilmComponent {
  MESSAGES = {
    correct: '🏆 Has acertado la pelicula',
    wrong: '🦦 Sigue intentandolo',
    init: 'Selecciona la película de los emojis',
  };
  film?: Film;
  filmsOptons?: Film[];
  message: string = this.MESSAGES.init;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.filmsService.selectFilm();
    this.film = this.filmsService.selectedFilm;
    this.filmsOptons = this.filmsService.getOptionFilms(4);
    this.message = this.MESSAGES.init;
  }

  public isOptionSameOfFilm(filmOption: Film) {
    this.message =
      filmOption.id === this.film!.id
        ? this.MESSAGES.correct
        : this.MESSAGES.wrong;
  }

  public changeFilm() {
    this.ngOnInit();
  }
}
