import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { RickyService } from "../services/ricky.service";
import { RickyDataActionTypes } from '../action/rick.action';
import { of } from 'rxjs';

@Injectable()
export class RickyEffect {

    loadRicky$ = createEffect(() => this.action$.pipe(
        ofType(RickyDataActionTypes.GetRickyData),
        mergeMap(() => this.rickyService.getAll().pipe(
            map(rickies => ({ type: RickyDataActionTypes.GetRickyDataSuccess, payload: rickies })),
            catchError(() => of({ type: RickyDataActionTypes.GetRickyDataError }))
        )
        )
    ));
    constructor(
        private action$: Actions,
        private rickyService: RickyService
    ) { }
}
