import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CounterComponent} from './components/counter/counter.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HeaderComponent} from './components/header/header.component';
import {MaterialUiModule} from "./shared/material-ui.module";

import {counterReducer} from "./components/counter/counter.reducer";
import {HttpClientModule} from "@angular/common/http";
import {BooksModule} from "./components/books/books.module";
import {CompositionsModule} from "./components/compositions/compositions.module";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
    }),
    BrowserAnimationsModule,
    MaterialUiModule,
    BooksModule,
    CompositionsModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
