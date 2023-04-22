import { CharacterService, Character } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterService: CharacterService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.characters = this.characterService.getCharacters();
 
  }

  seeCharacter(idx: number) {
    this.router.navigate(['/character', idx]);
  }
}
