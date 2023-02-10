import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksOverview} from "./components/books/components/books-overview/books-overview";
import {CounterComponent} from "./components/counter/counter.component";

const routes: Routes = [
  { path: 'books-overview', component: BooksOverview },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
