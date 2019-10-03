import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: any;

  constructor(private swapiService: SwapiService) { }

  getDetails(term: string, dropdown: string): void {
    this.swapiService.getDetails(term, dropdown)
    .subscribe((data) => {
      console.log(data);
      this.details = data['results'];
    });
 }

  ngOnInit() {
    // this.swapiService.getDetails().subscribe((data) => {
    //   console.log(data);
    //   this.details = data['results'];
    // });
  }

}
