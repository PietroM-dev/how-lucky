import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic';
import { TopicListComponent } from './components/topic-list';
import { CardTopicComponent } from './components/card-topic';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    TopicListComponent,
    CardTopicComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
