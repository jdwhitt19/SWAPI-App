import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }

  // searchSwapi(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Swapi[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Swapi[]>('searchHeroes', []))
  //   );
  // }

  // arr = ['luke', 'yoda', 'vader'];
  // console.log(arr);
}
