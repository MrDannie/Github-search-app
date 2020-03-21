import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { UsersComponent } from "./users/users.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { SingleUserComponent } from "./single-user/single-user.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBoxComponent,
    UsersComponent,
    PaginationComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "search", component: SearchBoxComponent },
      { path: "users/:id", component: UsersComponent },
      { path: "singleUser/:id", component: SingleUserComponent },
      { path: "", pathMatch: "full", redirectTo: "/search" },
      { path: "**", pathMatch: "full", redirectTo: "/search" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
