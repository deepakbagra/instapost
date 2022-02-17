import * as Actions from '../constants/actionTypes';

const postReducers = (posts=[], action) => {
    switch(action.type) {
        case Actions.LIST_ALL:
            return action.payload;
        
        case Actions.CREATE:
            return [...posts, action.payload];
        
        default :
        return posts;
    }
}
export default postReducers;