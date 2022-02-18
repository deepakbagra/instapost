import * as Actions from "../constants/actionTypes";
import * as api from '../../api';

//Action creators

export const listPosts = () => async (dispatch) => {
    try {
        const { data } = await api.listPosts();
        console.log('action:', data);
        dispatch({
            type: Actions.LIST_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({
            type: Actions.CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({
            type: Actions.DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}