import { createContext, useReducer, useEffect} from 'react';
import { AppReducer} from "./AppReducer";
import * as postService from '../api/postService.js';

export const GlobalContext = createContext();

const initialState = {
    posts: [],
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //GET
    const fetchPosts = async () => {
        try {
            const response = await postService.getPosts();
            dispatch({ type: 'SET_POSTS', payload: response.data });
        } catch (error) {
            console.error('No hay respuesta del servidor. Chequeá tu conexión', error);
        }
    };

    //POST
    const addPost = async (post) => {
        try {
            const response = await postService.addPost(post);
            dispatch({ type: 'ADD_POSTS', payload: response.data });
        } catch (error) {
            console.error('Error agregando post', error);
        }
    };


    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <GlobalContext.Provider value={{
            posts: state.posts,
            addPost,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};