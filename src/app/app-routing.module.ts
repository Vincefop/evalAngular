import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPage } from './pages/accueil/accueil.page';
import { PlayersPage } from './pages/players/players.page';

const routes: Routes = [
  { path: "", component: AccueilPage},
  { path: "characters", component: PlayersPage },
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
