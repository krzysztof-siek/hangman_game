import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatsComponent } from './game-content/stats/stats.component';
import { AlphabetComponent } from './game-content/alphabet/alphabet.component';
import { SummaryComponent } from './summary/summary.component';
import { DrawnWordComponent } from './game-content/drawn-word/drawn-word.component';
import { ImageComponent } from './image/image.component';
import { GameContentComponent } from './game-content/game-content.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StatsComponent,
    AlphabetComponent,
    SummaryComponent,
    DrawnWordComponent,
    ImageComponent,
    GameContentComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
