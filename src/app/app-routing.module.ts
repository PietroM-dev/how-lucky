import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicListComponent } from './components/topic-list';
import { CardTopicComponent } from './components/card-topic';
import { DiceTopicComponent } from './components/dice-topic';

const routes: Routes = [
  { path: '', component: TopicListComponent },
  { path: 'cards', component: CardTopicComponent },
  { path: 'dice', component: DiceTopicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
