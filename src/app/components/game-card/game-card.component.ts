import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  squares = [
    {
      'names': [{'name': 'Super Man'},{'name': 'Wonder Woman'},{'name': 'Aquaman'},{'name': 'Robin'},{'name': 'Darth Vader'}]
    },
    {
      'names': [{'name': 'Batman'},{'name': 'Gumby'},{'name': 'Iron Man'},{'name': 'Thor'},{'name': 'Bodhi Rook'}]
    },
    {
      'names': [{'name': 'Deadpool'},{'name': 'Storm'},{'name': 'CENTER'},{'name': 'Black Widow'},{'name': 'Luke Skywalker'}]
    },
    {
      'names': [{'name': 'Logan'},{'name': 'Darth Maul'},{'name': 'Venom'},{'name': 'Nightwing'},{'name': 'Groot'}]
    },
    {
      'names': [{'name': 'Woverine'},{'name': 'Link'},{'name': 'Captain America'},{'name': 'Ren'},{'name': 'Frodo'}]
    }
];

  constructor() { }

  ngOnInit() {
  }

}
