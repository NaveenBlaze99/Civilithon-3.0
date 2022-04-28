import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { BattleComponent } from './events/battle/battle.component';
import { BidtimeComponent } from './events/bidtime/bidtime.component';
import { EventsComponent } from './events/events.component';
import { ExquizComponent } from './events/exquiz/exquiz.component';
import { JukeboxComponent } from './events/jukebox/jukebox.component';
import { OneminrjComponent } from './events/oneminrj/oneminrj.component';
import { PaperComponent } from './events/paper/paper.component';
import { SharkComponent } from './events/shark/shark.component';
import { ShutterupComponent } from './events/shutterup/shutterup.component';
import { WatchpartyComponent } from './events/watchparty/watchparty.component';
import { WorkshopComponent } from './events/workshop/workshop.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events/paperpresentation', component: PaperComponent },
  { path: 'events/exquizme', component: ExquizComponent },
  { path: 'events/battleofmind', component: BattleComponent },
  { path: 'events/sharktank', component: SharkComponent },
  { path: 'events/watchparty', component: WatchpartyComponent },
  { path: 'events/jukebox', component: JukeboxComponent },
  { path: 'events/bidtime', component: BidtimeComponent },
  { path: 'events/1minRJ', component: OneminrjComponent },
  { path: 'events/shutterup', component: ShutterupComponent },
  { path: 'events/workshop', component: WorkshopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
