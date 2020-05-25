import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { rickyDataReducer } from '../app/reducer/ricky.reducer';

import { AppComponent } from './app.component';
import { SpeciesFilterComponent } from './components/species-filter/species-filter.component';
import { GenderFilterComponent } from './components/gender-filter/gender-filter.component';
import { OriginFilterComponent } from './components/origin-filter/origin-filter.component';
import { RickyTileComponent } from './components/ricky-tile/ricky-tile.component';
import { RickyService } from "../app/services/ricky.service";
import { EffectsModule } from '@ngrx/effects';
import { RickyEffect } from "../app/effect/ricky.effect";
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule }   from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { SortByPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesFilterComponent,
    GenderFilterComponent,
    OriginFilterComponent,
    RickyTileComponent,
    DashboardContainerComponent,
    FilterPipe,
    SearchPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ ricky: rickyDataReducer }),
    EffectsModule.forRoot([RickyEffect]),
    FormsModule
    
  ],
  providers: [RickyService,FilterPipe,SearchPipe,SortByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
