import * as Actions from '../constants/actionTypes';

const postReducers = (posts=[], action) => {
    switch(action.type) {
        case Actions.LIST_ALL:
            return action.payload;
        
        case Actions.CREATE:
            return [...posts, action.payload];
        
        case Actions.UPDATE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post);    
        
        case Actions.DELETE:
            return posts.filter(post => post._id !== action.payload);
        
        case Actions.LIKE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        
        case Actions.SEARCH:
            
            const filteredPosts = action.payload !== '' ? posts.filter((post) =>
                post.item?.toLowerCase().includes(action.payload?.toLowerCase())) : posts;
            
            console.log('filteredPosts', filteredPosts);
                
            if (filteredPosts.length === 0) return [];
            
            else return filteredPosts;

        default :
        return posts;
    }
}
export default postReducers;