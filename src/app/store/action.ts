import { Action } from '@ngrx/store';    

export  const POST_DATA = '[Post] updateUser';

export class PostData implements Action{
    readonly type = POST_DATA;
    constructor(public payload){}
}

export type AllActions = PostData;