import { Action } from '@ngrx/store';
import { RickyInterface } from '../model/rick.model';


export enum RickyDataActionTypes {
    GetRickyData = '[RickyDataActions] GetRickyData',
    GetRickyDataSuccess = '[RickyDataActions] GetRickyDataSuccess',
    GetRickyDataError = '[RickyDataActions] GetRickyDataError'
}

export class GetRickyData implements Action {
    readonly type = RickyDataActionTypes.GetRickyData;
    constructor() { }
}

export class GetRickyDataSuccess implements Action {
    readonly type = RickyDataActionTypes.GetRickyDataSuccess;
    constructor(public payload: RickyInterface) { }

}

export class GetRickyDataError implements Action {
    readonly type = RickyDataActionTypes.GetRickyDataError;
    constructor(public error: any) { }
}

export type RickyDataActions = GetRickyData | GetRickyDataSuccess | GetRickyDataError;