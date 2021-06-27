import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppStateService } from '../shared/services/appstate.service';
import { GrocerySearchComponent } from './grocery-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('GrocerySearchComponent', () => {

  let component: GrocerySearchComponent;
  let fixture: ComponentFixture<GrocerySearchComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GrocerySearchComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        AppStateService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerySearchComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should perform a search when the search criteria is new', () => {
    // by default lastSearch is set to empty string. Hence, following is a new term.
    const res = component.filterFruits('appl');
    expect(res).toEqual(true);
  });

  it('should not perform a new search when search criteria is not new', () => {
    const res = component.filterFruits('');
    expect(res).toEqual(false);
  });
});
