import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatsComponent } from './stats/stats.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { SummaryComponent } from './summary/summary.component';
import { DrawnWordComponent } from './drawn-word/drawn-word.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StatsComponent,
    AlphabetComponent,
    SummaryComponent,
    DrawnWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
