import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './action';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}













// import { createReducer, on } from '@ngrx/store';
// import {addUser, DataActions, DataActionTypes} from './action';

// export let initialState = []

// export function userReducer(state = initialState, action: DataActions) {
//         switch (action.type) {
//         case DataActionTypes.add_user:
//             return [...state, action.payload]
//         case DataActionTypes.add_user:
//             return state;
//         default:
//             return state    
//     }
// } 