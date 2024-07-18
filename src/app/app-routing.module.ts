import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';

import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';

import { E404Component } from './prs/misc/e404/e404.component';

import { ProductViewComponent } from './prs/product/product-view/product-view.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductChangeComponent } from './prs/product/product-change/product-change.component';

import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorChangeComponent } from './prs/vendor/vendor-change/vendor-change.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorViewComponent } from './prs/vendor/vendor-view/vendor-view.component';

import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';
import { RequestLinesComponent } from './prs/request/request-lines/request-lines.component';
import { RequestReviewItemComponent } from './prs/request/request-review-item/request-review-item.component';
import { RequestReviewsComponent } from './prs/request/request-reviews/request-reviews.component';

import { RequestlineCreateComponent } from './prs/requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './prs/requestline/requestline-change/requestline-change.component';

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

  { path: "request/list", component: RequestListComponent },
  { path: "request/create", component: RequestCreateComponent },
  { path: "request/view/:id", component: RequestViewComponent },
  { path: "request/change/:id", component: RequestChangeComponent },
  { path: "request/reviews", component: RequestReviewsComponent },
  { path: "request/lines/:id", component: RequestLinesComponent },
  { path: "request/review/item/:id", component: RequestReviewItemComponent },

  { path: "requestline/create/:rid", component: RequestlineCreateComponent },
  { path: "requestline/change/:id", component: RequestlineChangeComponent },

  { path: "product/create", component: ProductCreateComponent},
  { path: "product/change", component: ProductChangeComponent},
  { path: "product/view", component: ProductViewComponent},
  { path: "product/list", component: ProductListComponent},

  { path: "vendor/create", component: VendorCreateComponent},
  { path: "vendor/change", component: VendorChangeComponent},
  { path: "vendor/view", component: VendorViewComponent},
  { path: "vendor/list", component: VendorListComponent}
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
