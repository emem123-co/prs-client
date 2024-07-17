import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { MenuComponent } from './prs/menu/menu/menu.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { E404Component } from './prs/misc/e404/e404.component';

@NgModule({
  declarations:
  [ AppComponent,

    UserChangeComponent,
    UserListComponent,
    UserViewComponent,
    UserLoginComponent,
    UserCreateComponent,

    MenuComponent,
    AboutComponent,
    HomeComponent,
    E404Component ],
    

  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],

  providers: [provideHttpClient()],
  bootstrap: [AppComponent]

})
export class AppModule { }
