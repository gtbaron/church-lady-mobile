import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GameCardComponent} from "./components/game-card/game-card.component";
import {SquareComponent} from "./components/square/square.component";
describe('AppComponent', () => {
  let fixture;
  let app;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameCardComponent,
        SquareComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    component = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(component.querySelector('h1').textContent).toContain('Character Bingo');
  }));
});
