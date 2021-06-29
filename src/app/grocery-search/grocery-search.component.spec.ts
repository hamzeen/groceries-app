import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppStateService } from '../shared/services/appstate.service';
import { GrocerySearchComponent } from './grocery-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { groceries } from '../shared/data/groceries';

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
    const res = component.filterFruits('apple');
    expect(res).toEqual(true);
  });

  it('should not perform a new search when search criteria is not new', () => {
    const res = component.filterFruits('');
    expect(res).toEqual(false);
  });

  it('should confirm entire grocery list is shown', () => {
    const res = component.filterFruits('');
    expect(component.getFilteredGroceries().length).toEqual(groceries.length);
    expect(res).toEqual(false);
  });

  it('should confirm 2 results are shown for the search: \'ap\'', () => {
    const res = component.filterFruits('ap');
    expect(res).toEqual(true);
    const expectedResultCount = 2;
    expect(component.getFilteredGroceries().length).toEqual(expectedResultCount);
  });
});
