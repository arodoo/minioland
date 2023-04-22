import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { AboutComponent } from './components/about/about.component';
import { CharacterComponent } from './components/character/character.component';
import { BrowserComponent } from './components/browser/browser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'character/:id', component: CharacterComponent},
  {path: 'about', component: AboutComponent},
  { path: 'search/:term', component: BrowserComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
