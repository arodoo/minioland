import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  character: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private characterService: CharacterService) {
    this.activatedRoute.params.subscribe(params => {
      this.character = this.characterService.getCharacter(params['id']);
    });
  }
}
