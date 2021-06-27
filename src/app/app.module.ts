import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { UserService } from './shared/services/user.service';
import {AppStateService} from './shared/services/appstate.service';
import {GrocerySearchComponent} from './grocery-search/grocery-search.component';
import {GroceryDetailComponent} from './grocery-detail/grocery-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GrocerySearchComponent,
    GroceryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    AppStateService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
