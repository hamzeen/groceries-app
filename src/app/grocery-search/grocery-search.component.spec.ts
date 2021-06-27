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

});
