import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from 'src/app/models/player';
import { CharacterService } from 'src/app/pages/players/character.service';
import { PlayersPage } from 'src/app/pages/players/players.page';

@Component({
  selector: 'app-form-new-character',
  templateUrl: './form-new-character.component.html',
  styleUrls: ['./form-new-character.component.scss']
})
export class FormNewCharacterComponent implements OnInit {

  formulaire: FormGroup;

  @Output() characterCreated: EventEmitter<boolean> = new EventEmitter();

  constructor(private characterService: CharacterService) { 
    this.formulaire = new FormGroup({
      name: new FormControl(),
      key: new FormControl(),
      title: new FormControl(),
      active: new FormControl()
    })
  }

  ngOnInit(): void {
  }


  save(): void {
    this.characterService.create(this.formulaire.value).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => {
        console.log("post effectué");
        this.characterCreated.emit(true);
      }
    })
  }
}
