import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.html'
})
export class TopicComponent {
  @Input() topicName!: string;
}
