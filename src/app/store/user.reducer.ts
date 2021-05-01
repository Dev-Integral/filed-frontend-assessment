import { createReducer, on } from '@ngrx/store';
import {addUser} from './action';

export const initialState = 0;

const _userReducer = createReducer(
    initialState,
    on(addUser, (state) => state + 1),
    
);

export function userReducer(state, action){
    return _userReducer(state, action);
}