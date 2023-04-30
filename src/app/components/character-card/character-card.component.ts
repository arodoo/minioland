import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit{

  @Input() character: any = { }
  @Input() index: number = 0;

  @Output() selectedCharacter: EventEmitter<number>;

  constructor(private router: Router){
    this.selectedCharacter = new EventEmitter()
  }

  ngOnInit(): void {
    
  }

  seeCharacter(){
     this.router.navigate(['/character', this.index]);
    // this.selectedCharacter.emit(this.index);
    
  }
}
