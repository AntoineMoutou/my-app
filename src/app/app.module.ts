import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProtoThreeComponent } from './proto-three/proto-three.component';
import { ProtoBabylonComponent } from './proto-babylon/proto-babylon.component';
import { ProtoSatListComponent } from './proto-sat-list/proto-sat-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtoThreeComponent,
    ProtoBabylonComponent,
    ProtoSatListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
