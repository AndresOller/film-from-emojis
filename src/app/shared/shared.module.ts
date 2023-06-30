import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [TitleComponent, MessageComponent],
  imports: [CommonModule],
  exports: [TitleComponent, MessageComponent],
})
export class SharedModule {}
