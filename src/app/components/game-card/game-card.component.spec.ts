import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { SquareComponent } from "../square/square.component";

describe('GameCardComponent', () => {
  let fixture: ComponentFixture<GameCardComponent>;
  let component: GameCardComponent;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameCardComponent,
        SquareComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table for the game squares', () => {
    expect(app.querySelector('#game-card')).toBeTruthy();
  });

  it('should display the correct name for the given square', () => {
    const squares = [
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
    component.squares = squares;
    fixture.detectChanges();
    expect(app.querySelectorAll('p').length).toBe(25);
  });
});
