import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a td with the appropriate class for each square', () => {
    component.name = 'hero';
    fixture.detectChanges();
    expect(app.querySelector('p').innerHTML).toBeTruthy('hero');
  });

  it('should display the center star when given the appropriate name', () => {
    component.name = 'CENTER';
    fixture.detectChanges();
    expect(app.querySelector('.center').innerHTML).toContain('star_border');
  });

});

