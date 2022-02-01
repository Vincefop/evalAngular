import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Character } from 'src/app/models/player';

@Component({
  selector: 'app-form-new-character',
  templateUrl: './form-new-character.component.html',
  styleUrls: ['./form-new-character.component.scss']
})
export class FormNewCharacterComponent implements OnInit {

  //Pour le formulaire on va utiliser un formGroup
  formulaire: FormGroup;

  //Le Output est un eventEmitter qui va envoyer de l'information à la page parente playersPage
  @Output() characterCreated: EventEmitter<Character> = new EventEmitter();

  /**
   * Le constructeur initialise le formulaire et les valeurs du formulaire pour les récupérer après
   */
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


  /**
   * La fonction save va envoyer les données du formulaire à la page parente pour qu'elle l'enregistre avec le service
   */
  save(): void {
    this.characterCreated.emit(this.formulaire.value)
  }
}
