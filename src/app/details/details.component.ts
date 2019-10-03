import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

//   getDetails(term: string, dropdown: string): void {
//     this.swapiService.getResults(term, dropdown)
//     .subscribe((data) => {
//       console.log(data);
//       this.details = data['results'];
//     });
//  }

  ngOnInit() {
    // this.swapiService.getDetails().subscribe((data) => {
    //   console.log(data);
    //   this.details = data['results'];
    // });
  }

}
