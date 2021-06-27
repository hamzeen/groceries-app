import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { markFormTouched } from '../shared/util/utilities';
import {Router} from '@angular/router';
import {AppStateService} from '../shared/services/appstate.service';
import { groceries } from '../shared/data/groceries';
import {Grocery} from '../shared/interfaces/grocery';

@Component({
  selector: 'app-grocery-search',
  templateUrl: './grocery-search.component.html',
  styleUrls: ['./grocery-search.component.scss']

})
export class GrocerySearchComponent implements OnInit {

  public formContact: FormGroup;
  private lastSearch = '';
  private filteredFruits: Grocery[];
  private groceries: Grocery[] = groceries;

  constructor(
    private http: HttpClient,
    private stateService: AppStateService,
    private readonly formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.filteredFruits = this.groceries;
  }

  onReviewsByEmployee(selected: Grocery) {
    // set the grocery selection on state service
    this.stateService.setGroceryDetail(selected);

    // take the user to grocery detail route
    this.router.navigateByUrl('/grocery-detail');
  }


  createForm() {
    const formFields = { criteria: '' };
    this.formContact = this.formBuilder.group(formFields);

    // observe changes on search input field
    this.formContact.controls['criteria']
      .valueChanges
      .subscribe((value) => {
        const tempCriteria = value.trim().toLocaleLowerCase();
        this.filterFruits(tempCriteria);
      });
  }

  onSubmit() {
    // markFormTouched(this.formContact);

    const tempCriteria = this.formContact.value
      .criteria.trim().toLocaleLowerCase();
    this.filterFruits(tempCriteria);
  }

  filterFruits(criteria: string) {

    if (this.lastSearch !== criteria) {

      const filtered = this.groceries.filter(el =>
        el.name.toLocaleLowerCase().indexOf(criteria) > -1);

      this.filteredFruits = filtered;
      this.lastSearch = criteria;
    }
  }

}
