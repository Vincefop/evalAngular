import { Injectable } from '@angular/core';
import { Character } from 'src/app/models/player';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.URL}/characters`);
  }

  modify(character: Character): Observable<Character> {
    return this.http.put<Character>(`${environment.URL}/characters/${character.id}`, character);
  }

  delete(id: number): Observable<Character> {
    return this.http.delete<Character>(`${environment.URL}/characters/${id}`);
  }

  create(character: Character): Observable<Character> {
    return this.http.post<Character>(`${environment.URL}/characters`, character);
  }

}
