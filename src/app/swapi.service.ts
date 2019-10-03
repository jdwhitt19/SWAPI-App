import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(public httpClient: HttpClient) { }

   getDetails(term, dropdown) {
    return this.httpClient.get(`https://swapi.co/api/${dropdown}/?search=${term}`)
  }
}
