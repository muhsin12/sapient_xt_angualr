import { RickyInterface } from '../model/rick.model';
import { RickyDataActionTypes, RickyDataActions } from '../action/rick.action';

export interface RickyDataState {
    data: RickyInterface;
    loading: boolean,
    error: any
}

export const initialRickyDataState: RickyDataState = {
    data: undefined,
    loading: undefined,
    error: undefined
}

export function rickyDataReducer(state = initialRickyDataState, action: RickyDataActions): RickyDataState {
    switch (action.type) {
        case RickyDataActionTypes.GetRickyData:
            {
                return { ...state, loading: true };
            }
        case RickyDataActionTypes.GetRickyDataSuccess:
            {
                return { ...state, data: { ...action.payload }, loading: false, error: undefined };
            }
        case RickyDataActionTypes.GetRickyDataError:
            {
                return { ...state, data: undefined, loading: false, error: true }
            }
        default:
            {
                return state;
            }
    }
}