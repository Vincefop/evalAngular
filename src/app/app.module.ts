import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersPage } from './pages/players/players.page';
import { AccueilPage } from './pages/accueil/accueil.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormNewCharacterComponent } from './components/form-new-character/form-new-character.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersPage,
    AccueilPage,
    FormNewCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
