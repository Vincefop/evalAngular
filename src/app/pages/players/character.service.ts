import { Injectable } from '@angular/core';
import { Character } from 'src/app/models/player';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Le service est injectable cad qu'
 * on va pouvoir aller le chercher en l'injectant directement dans le constructeur d'une page
 */
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  /**
   * 
   * @param http le http est indispensable pour faire fonctionner la connexion
   */
  constructor(private http: HttpClient) { }

  /**
   * permet de récupérer tous les characters depuis la liste lol.json/depuis le back
   * @returns un observable d'une liste de characters
   */
  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.URL}/characters`);
  }

  /**
   * Va modifier un character dans la base
   * @param character le character à modifier
   * @returns un observable d'un character
   */
  modify(character: Character): Observable<Character> {
    return this.http.put<Character>(`${environment.URL}/characters/${character.id}`, character);
  }

  /**
   * Va détruire un character en utilisant son id
   * @param id du character à supprimer
   * @returns un observable d'un character
   */
  delete(id: number): Observable<Character> {
    return this.http.delete<Character>(`${environment.URL}/characters/${id}`);
  }

  /**
   * Fonction qui créer un nouveau character
   * @param character le character à ajouter à la bdd
   * @returns un observable d'un character
   */
  create(character: Character): Observable<Character> {
    return this.http.post<Character>(`${environment.URL}/characters`, character);
  }

}
