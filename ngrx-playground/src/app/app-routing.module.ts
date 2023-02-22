import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksOverviewComponent} from "./components/books/components/books-overview/books-overview.component";
import {CounterComponent} from "./components/counter/counter.component";
import {CompositionsComponent} from "./components/compositions/compositions.component";

const routes: Routes = [
  { path: 'books-overview', component: BooksOverviewComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'compositions', component: CompositionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
