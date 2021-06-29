import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../shared/services/appstate.service';
import { Grocery } from '../shared/interfaces/grocery';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.scss']

})
export class GroceryDetailComponent implements OnInit {

  private groceryDetail: Grocery;

  constructor(
    private stateService: AppStateService
  ) {
    // nothing here..
  }

  ngOnInit() {
    this.renderReviews();
  }

  renderReviews(): void {
    this.groceryDetail = this.stateService.getGroceryDetail() || null;
  }

}
