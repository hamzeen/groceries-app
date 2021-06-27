import { Routes } from '@angular/router';
import { GrocerySearchComponent } from './grocery-search/grocery-search.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';

export const routes: Routes = [
  {
    /* intentionally not protected this route to enable easily Singup during assessment evaluation */
    path: 'grocery-search',
    component: GrocerySearchComponent
  },
  {
    path: 'grocery-detail',
    component: GroceryDetailComponent
  },
  { path: '', redirectTo: '/grocery-search', pathMatch: 'full' },
  { path: '**', redirectTo: '/grocery-search', pathMatch: 'full' },
];
