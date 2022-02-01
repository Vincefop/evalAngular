import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/player';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss']
})
export class PlayersPage implements OnInit {

  /** Les attributs */
  charactersList: Character[] = [];//la liste des characters récupérés dans la bdd
  showActive: boolean = false;//la variable utilisée pour afficher ou non la liste de characters actifs
  showPassive: boolean = false;//la variable utilisée pour afficher ou non la liste de characters inactifs
/**
 * Le constructeur utilise le service qui est injectable
 * @param characterService le service qui permet de modifier la bdd
 */
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    //à la création de players page, on va chercher la liste de characters dans la bdd et on met à jour la variable charactersList
    this.getAll();
  }

  //CRUD
  /**
   * Fonction qui permet de récupérer tous les characters de la bdd ici lol.json
   * et de les mettre dans la liste charactersList
   */
  getAll(): void {
    this.characterService.getAll().subscribe({
      next: data => this.charactersList = data,
      error: err => console.error(err),
      complete: () => console.log("récupération de tous les users finie")
    })
  }

  /**
   * Fonction qui crée un nouveau character dans la bdd
   * @param newCharacter le nouveau character
   */
  createCharacter(newCharacter: Character){
    this.characterService.create(newCharacter).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () =>{
        console.log("post effectué");
        this.getAll();//maj de la liste pour l'affichage
      }

    })
  }

  /**
   * Fonction qui modifie un utilisateur : on envoie l'utilisateur modifié dans la table avec un put
   * @param modifiedCharacter l'utilisateur modifié qui va remplacer celui qui a le même id
   */
  modifyCharacter(modifiedCharacter: Character): void {
    this.characterService.modify(modifiedCharacter).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => {
        console.log(`modification character ${modifiedCharacter.id} ok`);
        this.getAll();//maj de la liste pour l'affichage
      }
    });
  }

  /**
   * Fonction qui va détruire un character de la bdd
   * @param character le character à supprimer
   */
  deleteCharacter(character: Character) {
    this.characterService.delete(character.id).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => {
        console.log(`ok suppression character id ${character.id}`);
        this.getAll();//maj de la liste pour l'affichage
      }
    })
  }


  //FONCTIONS
  /**
   * Permet d'afficher/de cacher la liste active
   * la liste passive disparait quand on appuie sur le bouton
   */
  changeActive():void{
    if(this.showActive)
      this.showActive = false;
    else{
      this.showActive = true;
      this.showPassive = false;
    }
  }

  /**
   * Permet d'afficher/de cacher la liste inactive
   * la liste active disparait quand on appuie sur le bouton
   */
  changePassive():void{
    if(this.showPassive)
      this.showPassive = false;
    else{
      this.showPassive = true;
      this.showActive = false;
    }
  }

  /**
   * fonction qui va modifier le status d'un character dans la base de donnée
   * @param character le character qui va changer de status actif ou passif
   */
  changeState(character: Character) : void{
    character.active = !character.active;
    this.modifyCharacter(character);
  }
}
