import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Grocery} from '../interfaces/grocery';


@Injectable({
  providedIn: 'root',
})
export class AppStateService {

  private selectedUserIdForReviews: number;
  private selectedUsernameForReviews: string;
  private groceryDetail: Grocery;

  constructor(private http: HttpClient) {
  }

  getGroceryDetail() {
    return this.groceryDetail;
  }

  setGroceryDetail(userSelection: Grocery) {
    this.groceryDetail = userSelection;
  }

}

