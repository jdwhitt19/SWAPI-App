import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';


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
  public results: any = [];

  
  constructor(private _swapiService: SwapiService) {}
  
  searchTypes: SearchType[] = [
    {value: 'people', viewValue: 'People'},
    {value: 'ships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];
  
  public selected: string = 'people';

  search(query){
    this._swapiService.getResults(this.sType, query ? query : '')
      .subscribe(data => {this.results = data['results']; console.log(data['results'])})
  }

  public sType: string = 'people';

  setSearchType(type){
    this.sType = type
  }



  ngOnInit() {

  }

}