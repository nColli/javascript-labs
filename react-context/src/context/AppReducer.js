export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.payload };
        case 'ADD_POSTS':
            return { ...state, posts: [...state.posts, action.payload] };
        case 'EDIT_POSTS':
            return {
                ...state,
                posts: state.posts.map(p =>
                    p.id === action.payload.id ? action.payload : p
                ),
            };
        case 'REMOVE_POSTS':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload),
            };
        default:
            return state;
    }
};