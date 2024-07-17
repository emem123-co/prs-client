import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

//import { provideHttpClient } from '@angular/common/http';

//import { AppComponent } from './app.component';

//import { MenuComponent } from './prs/menu/menu/menu.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';

import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';

import { E404Component } from './prs/misc/e404/e404.component';

//import { ProductViewComponent } from './prs/product/product-view/product-view.component';
//import { ProductListComponent } from './prs/product/product-list/product-list.component';
//import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
//import { ProductChangeComponent } from './prs/product/product-change/product-change.component';

//import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
//import { VendorChangeComponent } from './prs/vendor/vendor-change/vendor-change.component';
//import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
//import { VendorViewComponent } from './prs/vendor/vendor-view/vendor-view.component';

import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';

const routes: Routes = [
  { path: "", redirectTo: "/user/list", pathMatch: "full"},
  { path: "user/list", component: UserListComponent },
  { path: "user/view/{id}", component: UserViewComponent},
  { path: "user/create", component: UserCreateComponent},
  { path: "user/login", component: UserLoginComponent},
  { path: "user/change/{id}", component: UserChangeComponent},

  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},

  { path: "**", component: E404Component },

  { path: "request/create", component: RequestCreateComponent},
  { path: "request/change", component: RequestChangeComponent},
  { path: "request/view", component: RequestViewComponent},
  { path: "request/list", component: RequestListComponent}
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
