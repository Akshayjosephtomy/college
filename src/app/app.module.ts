import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchstuddentComponent } from './searchstuddent/searchstuddent.component';
import { RouterModule ,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddstudentComponent
  },
  {
    path:"search",component:SearchstuddentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    NavbarComponent,
    SearchstuddentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
