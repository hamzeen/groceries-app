import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should check if the app title is present', async(() => {

    // console.log('root element markup', confirmDialogEl);
    // const compiled = fixture.debugElement.nativeElement;
    // console.log('container markup:', compiled);

    const appRoot = fixture.debugElement.query(By.css('.single-page')).nativeElement;
    expect(appRoot).toBeTruthy();
    expect(appRoot.textContent).toEqual('');
    expect(fixture.debugElement.query(By.css('a'))).toBeFalsy();
  }));
});

