import { CURRENT_ID } from '../constants/actionTypes'
const currentIdReducer = (state = null, action) => {
    switch (action.type) {
        case CURRENT_ID:
            return action.payload;         
    
        default:
            return state;
    }
}

export default currentIdReducer;