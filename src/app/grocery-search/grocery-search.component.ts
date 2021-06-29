import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateService } from '../shared/services/appstate.service';
import { groceries } from '../shared/data/groceries';
import { Grocery } from '../shared/interfaces/grocery';

@Component({
  selector: 'app-grocery-search',
  templateUrl: './grocery-search.component.html',
  styleUrls: ['./grocery-search.component.scss']

})
export class GrocerySearchComponent implements OnInit {

  private formSearch: FormGroup;
  private lastSearch = '';
  private filteredFruits: Grocery[];
  private groceries: Grocery[] = groceries;

  constructor(
    private http: HttpClient,
    private stateService: AppStateService,
    private readonly formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      const filter = params['filter'];
      if (filter && filter !== '') {
        // perform search ..
        this.formSearch.controls['filter'].setValue(filter);
        this.filterFruits(filter);
      } else {
        this.filteredFruits = this.groceries;
      }
    });
  }

  onClickDetail(selected: Grocery): void {

    // set the grocery selection on state service
    this.stateService.setGroceryDetail(selected);

    // take the user to grocery detail route
    this.router.navigateByUrl('/grocery-detail');
  }

  createForm(): void {
    const formFields = { filter: '' };
    this.formSearch = this.formBuilder.group(formFields);

    // observe changes on search input field
    this.formSearch.controls['filter']
      .valueChanges
      .subscribe((value: string) => {
        const tempFilter = value.trim().toLocaleLowerCase();
        this.filterFruits(tempFilter);

        // update query param so that user will have the last search from history
        this.router.navigate([], { queryParams: { filter: tempFilter } });
      });
  }

  onSubmit(): void {
    // markFormTouched(this.formContact);

    const tempFilter = this.formSearch.value
      .filter.trim().toLocaleLowerCase();
    this.filterFruits(tempFilter);
  }

  filterFruits(filter: string): boolean {

    if (this.lastSearch !== filter) {
      this.filteredFruits = this.groceries.filter(el =>
          el.name.toLocaleLowerCase().indexOf(filter) > -1);
      this.lastSearch = filter;
      return true;
    }

    return false;
  }

  getFilteredGroceries(): Grocery[] {
    return this.filteredFruits;
  }
}
