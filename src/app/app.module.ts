import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from "./componets/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './componets/global-error/global-error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './componets/modal/modal.component';
import { CreateProductComponent } from './componets/create-product/create-product.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
