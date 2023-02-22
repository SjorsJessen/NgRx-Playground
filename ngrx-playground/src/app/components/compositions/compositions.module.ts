import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {selectCompositionsReducer} from "./compositions.reducer";
import {CompositionsComponent} from "./compositions.component";
import {MaterialUiModule} from "../../shared/material-ui.module";


@NgModule({
  declarations: [
    CompositionsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('compositions', selectCompositionsReducer),
    MaterialUiModule,
  ],
  exports: [
    CompositionsComponent
  ]
})
export class CompositionsModule {
}
