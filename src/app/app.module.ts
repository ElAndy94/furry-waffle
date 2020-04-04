import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomeComponent, ListComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
