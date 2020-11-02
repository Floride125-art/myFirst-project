import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { MoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RetrieveComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
