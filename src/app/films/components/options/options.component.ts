import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';

@Component({
  selector: 'films-options',
  templateUrl: './options.component.html',
  styles: [],
})
export class OptionsComponent {
  @Input()
  public films?: Film[];

  @Output() selectOption = new EventEmitter<Film>();
  emitSelectedOption(option: Film) {
    this.selectOption.emit(option);
  }
}
