import { Component, OnInit } from '@angular/core';

// import { Observable, Subject } from 'rxjs';

// import {
//    debounceTime, distinctUntilChanged, switchMap
//  } from 'rxjs/operators';

import { SwapiService } from '../swapi.service';
import { HttpClient } from '@angular/common/http';


export interface SearchType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  url: string  = 'https://swapi.co/api/people/1';

  results: any;

  searchTypes: SearchType[] = [
    {value: 'people', viewValue: 'People'},
    {value: 'ships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];

  constructor(private http: HttpClient) { }

  getResults(searchTerm) {
    this.results = this.http.get(this.url)
    console.log(searchTerm);
  }

  ngOnInit() {
  }

}
