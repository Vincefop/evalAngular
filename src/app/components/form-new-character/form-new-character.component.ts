import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from 'src/app/models/player';

@Component({
  selector: 'app-form-new-character',
  templateUrl: './form-new-character.component.html',
  styleUrls: ['./form-new-character.component.scss']
})
export class FormNewCharacterComponent implements OnInit {

  formulaire: FormGroup;

  @Output() characterCreated: EventEmitter<Character> = new EventEmitter();

  constructor() { 
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
    this.characterCreated.emit(this.formulaire.value);
  }
}
