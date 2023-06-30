import { Injectable } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FILMS } from 'src/app/films/mocks/films.mock';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private films: Film[] = FILMS;
  public selectedFilm!: Film;

  constructor() {}

  private getAleatoryFilm(films: Film[] = this.films) {
    const element = Math.floor(Math.random() * films.length);

    return films[element];
  }

  private deleteFilmFromFilms(films: Film[], filmToDelete: Film) {
    return films.filter((film) => film.id !== filmToDelete.id);
  }

  public selectFilm() {
    this.selectedFilm = this.getAleatoryFilm();
  }

  public getOptionFilms(numberOfFilms: number = 4) {
    let i: number = 0;
    let filmsSelected: Film[] = [{ ...this.selectedFilm }];
    let filmsNotSelected: Film[] = this.deleteFilmFromFilms(
      this.films,
      this.selectedFilm
    );

    while (i < numberOfFilms - 1) {
      let filmSelected: Film = this.getAleatoryFilm(filmsNotSelected);
      filmsSelected = [...filmsSelected, { ...filmSelected }];
      filmsNotSelected = this.deleteFilmFromFilms(
        filmsNotSelected,
        filmSelected
      );
      i++;
    }

    return filmsSelected.sort(function () {
      return Math.random() - 0.5;
    });
  }
}
