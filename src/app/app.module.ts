import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GitDbComponent } from './comps/git-db/git-db.component';
import { GitTestComponent } from './comps/git-test/git-test.component';

@NgModule({
  declarations: [
    AppComponent,
    GitDbComponent,
    GitTestComponent
  ],
  imports: [
    BrowserModule ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
