import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {GroceryDetailComponent} from './grocery-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AppStateService} from '../shared/services/appstate.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('GroceryDetailComponent', () => {

  let component: GroceryDetailComponent;
  let fixture: ComponentFixture<GroceryDetailComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GroceryDetailComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        AppStateService
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', async(() => {
    expect(component).toBeTruthy();
  }));

});
