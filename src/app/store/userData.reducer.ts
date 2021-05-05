import * as PostActions from './userAction';

export type Action = PostActions.AllActions;

const defaultState = {
    firstName: '',
    lastName: '',
    email: '',
    monthly: '',
    phone: '',
    
};
// Helper function to create new state object
const newState = (state, newData )=>{
    return Object.assign({}, state, newData)
}

// Reducer function
export function userDataReducer(state = defaultState, action) {
    console.log(action.type, state);
    switch (action.type){
        case PostActions.POST_DATA:
            return newState(state, action.payload);
        default: 
            return state;
    }
}

