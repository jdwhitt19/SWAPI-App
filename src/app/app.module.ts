import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import { SwapiService } from './swapi.service';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTreeModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [HttpClient, SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }