import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/player';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss']
})
export class PlayersPage implements OnInit {

  activeCharacterList: Character[] = [];
  showActive: boolean = false;
  showPassive: boolean = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getAll();
  }

  //CRUD
  getAll(): void {
    this.characterService.getAll().subscribe({
      next: data => this.activeCharacterList = data,
      error: err => console.error(err),
      complete: () => console.log("récupération de tous les users finie")
    })
  }

  modifyCharacter(modifiedCharacter: Character): void {
    this.characterService.modify(modifiedCharacter).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => {
        console.log(`modification character ${modifiedCharacter.id} ok`);
        this.getAll();
      }
    });
  }

  deleteCharacter(character: Character) {
    this.characterService.delete(character.id).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => {
        console.log(`ok suppression character id ${character.id}`);
        this.getAll();
      }
    })
  }


  //FONCTIONS
  changeActive():void{
    if(this.showActive)
      this.showActive = false;
    else{
      this.showActive = true;
      this.showPassive = false;
    }
  }

  changePassive():void{
    if(this.showPassive)
      this.showPassive = false;
    else{
      this.showPassive = true;
      this.showActive = false;
    }
  }

  changeState(character: Character) : void{
    character.active = !character.active;
    this.modifyCharacter(character);
  }
}
