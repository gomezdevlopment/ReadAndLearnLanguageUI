import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu/nav-menu.component';
import { ReadComponent } from './read/read.component';
import { AddTextComponent } from './read/add-text/add-text/add-text.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTextListComponent } from './read/user-text-list/user-text-list/user-text-list.component';
import { UserTextComponent } from './read/user-text/user-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ReadComponent,
    AddTextComponent,
    UserTextListComponent,
    UserTextComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
