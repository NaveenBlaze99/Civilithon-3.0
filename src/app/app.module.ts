import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { PaperComponent } from './events/paper/paper.component';
import { ExquizComponent } from './events/exquiz/exquiz.component';
import { BattleComponent } from './events/battle/battle.component';
import { SharkComponent } from './events/shark/shark.component';
import { WatchpartyComponent } from './events/watchparty/watchparty.component';
import { JukeboxComponent } from './events/jukebox/jukebox.component';
import { BidtimeComponent } from './events/bidtime/bidtime.component';
import { OneminrjComponent } from './events/oneminrj/oneminrj.component';
import { ShutterupComponent } from './events/shutterup/shutterup.component';
import { WorkshopComponent } from './events/workshop/workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    MainComponent,
    ContactComponent,
    PaperComponent,
    ExquizComponent,
    BattleComponent,
    SharkComponent,
    WatchpartyComponent,
    JukeboxComponent,
    BidtimeComponent,
    OneminrjComponent,
    ShutterupComponent,
    WorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
