import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs'




@Injectable({
  providedIn: 'root'
})
export class SearchService {
  details: any;



  constructor(private http: HttpClient) { }

  fetchPerson(term, dropdown):any {
     return this.http.get(`https://swapi.co/api/${dropdown}/?search=${term}`)

      

    
    
      
    // console.log(Response)
  }

}
