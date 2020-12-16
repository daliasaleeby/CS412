import { TestBed } from '@angular/core/testing';
import { Parent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Parent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Parent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PS7'`, () => {
    const fixture = TestBed.createComponent(Parent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PS7');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Parent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('PS7 app is running!');
  });
});
