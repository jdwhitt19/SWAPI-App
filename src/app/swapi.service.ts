import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
import { IPeople } from './people';
import { Observable } from 'rxjs';
>>>>>>> 2013e159b1d0647527ce6842751f08e37c2d95d1

@Injectable()
export class SwapiService {

<<<<<<< HEAD
  constructor(public httpClient: HttpClient) { }

   getDetails(term, dropdown) {
    return this.httpClient.get(`https://swapi.co/api/${dropdown}/?search=${term}`)
  }
}
=======
  private _url: string = `https://swapi.co/api/`

  constructor(private http: HttpClient) {}

  getResults(type, query): Observable<IPeople[]> {
    console.log('type: ', type)
    if(type == 'people'){return this.http.get<IPeople[]>(this._url + 'people/?search=' + query)}
    else if(type == 'ships'){return this.http.get<IPeople[]>(this._url + 'starships/?search=' + query)}
    else if(type == 'films'){return this.http.get<IPeople[]>(this._url + 'films/?search=' + query)};

  }
}
>>>>>>> 2013e159b1d0647527ce6842751f08e37c2d95d1
