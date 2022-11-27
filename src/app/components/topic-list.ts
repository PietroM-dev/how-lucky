import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.html'
})
export class TopicListComponent {
  topics: string[] = ['Cards', 'Dice'];
}
