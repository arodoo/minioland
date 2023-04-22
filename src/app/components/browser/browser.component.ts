import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  characters: any[] = [];
  term: any = "";
  
  constructor(private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['term']);
      this.characters = this.characterService.searchCharacter(params['term']);
      this.term = params['term'];
      console.log(this.characters);
    })
  }

  seeCharacter(idx: any){
    this.router.navigate(['/character', idx]);
  }


}
