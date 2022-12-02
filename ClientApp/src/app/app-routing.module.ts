import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { ProductDashboardComponent } from './Components/product-dashboard/product-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent, pathMatch: 'full'},
  { path: 'catalog/product/:id', component: NewProductComponent},
  { path: 'dashboard', component: ProductDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
