import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Person } from '../person';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  persons: Person[];
  private searchTerms = new Subject<string>();




  constructor() { }

  search(term: string): void {
    this.searchTerms.next(term);

    
    
    fetch(`https://swapi.co/api/people/?search=${term}`)
    .then(result => {
        //console.log(result)
       return result.json()
    })
    .then(json =>{
         console.log(json.results[0].name)
        return json.results[0].name
    })
    
  }



  ngOnInit(): void {

    // console.log(this.json)


    



  }

}
