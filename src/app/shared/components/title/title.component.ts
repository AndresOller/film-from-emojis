import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input()
  public icon: string = '';
}
