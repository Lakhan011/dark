import { Component } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-recent-chat',
  standalone: true,
  imports: [NgScrollbarModule],
  templateUrl: './recent-chat.component.html',
})
export class RecentchatComponent {
  constructor() { }

}
