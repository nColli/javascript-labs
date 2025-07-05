import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => axios.get(API_BASE_URL);

export const addPost = (post) => axios.post(API_BASE_URL, post);

export const updatePost = (post) =>
    axios.put(`${API_BASE_URL}/${post.id}`, post);

export const deletePost = (id) =>
    axios.delete(`${API_BASE_URL}/${id}`);