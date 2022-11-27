import { Component } from '@angular/core';
import { Location } from '@angular/common';

interface Deck {
  numberOfCards: number;
  numberOfSuits: number;
}

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.html'
})
export class CardTopicComponent {
  deck: Deck = { numberOfCards: 0, numberOfSuits: 0 };
  submitted = false;

  constructor(private _location: Location) {}

  onContinue() {
    console.log('Here');
    console.log(this.deck);
  }

  onBack() {
    this._location.back();
  }
}
