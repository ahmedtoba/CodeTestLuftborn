import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { ProductComponent } from './Components/catalog/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { ProductDashboardComponent } from './Components/product-dashboard/product-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    ProductComponent,
    NewProductComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
