import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Swapi } from './people';
import { Observable } from 'rxjs';

@Injectable()
export class SwapiService {

  private _url: string = `https://swapi.co/api/`

  constructor(private http: HttpClient) {}

  getResults(type, query): Observable<Swapi[]> {
    console.log('type: ', type)
    if(type == 'people'){return this.http.get<Swapi[]>(this._url + 'people/?search=' + query)}
    else if(type == 'ships'){return this.http.get<Swapi[]>(this._url + 'starships/?search=' + query)}
    else if(type == 'films'){return this.http.get<Swapi[]>(this._url + 'films/?search=' + query)};

  }
}