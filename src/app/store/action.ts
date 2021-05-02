import { createAction, Action } from '@ngrx/store';    

//export const addUser = createAction('[Counter Component] Increment');
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');



/* Previous knowledge */
// export enum DataActionTypes {
//     add_user = 'add_user',
//     GET_DATA = 'GET_DATA'
// }


// export class addUser implements Action{
//     readonly type = DataActionTypes.add_user
//     constructor (public payload: any){}
// }

// export type DataActions = addUser