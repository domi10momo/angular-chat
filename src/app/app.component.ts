import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '武井　賢治', message: 'おつかれさまです！' },
  { name: '武井　賢治', message: 'この間の件ですが。。。' },
  { name: '五十嵐 洋平', message: 'おつかれさまです！' },
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMMENTS;
}
