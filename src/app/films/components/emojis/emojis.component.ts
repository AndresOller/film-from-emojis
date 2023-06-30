import { Component, Input } from '@angular/core';

@Component({
  selector: 'films-emojis',
  templateUrl: './emojis.component.html',
  styles: [],
})
export class EmojisComponent {
  @Input()
  public emoji?: string;
}
