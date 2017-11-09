import { API_URI } from './constants';

const token = 'hello-there';

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
};

/* GET */

export const getCategories = async () => {
    const response = await fetch(`${API_URI}/categories`, {method: 'GET', headers})
    const data = await response.json();
    return data.categories;
};

export const getPostsByCategory = async (category) => {
    const response = await fetch(`${API_URI}/${category}/posts`, {method: 'GET', headers})
    const data = await response.json();
    return data;
};

export const getPosts = async () => {
    const response = await fetch(`${API_URI}/posts`, {method: 'GET', headers})
    const data = await response.json();
    return data;
};

export const getSinglePost = async (id) => {
    const response = await fetch(`${API_URI}/posts/${id}`, {method: 'GET', headers})
    const data = await response.json();
    return data;
};

export const getCommentsByPost = async (id) => {
    const response = await fetch(`${API_URI}/posts/${id}/comments`, {method: 'GET', headers})
    const data = await response.json();
    return data;
};

export const getCommentDetails = async (id) => {
    const response = await fetch(`${API_URI}/comments/${id}`, {method: 'GET', headers})
    const data = await response.json();
    return data;
};

/* POST */

export const addPost = async (id, timestamp, title, body, author, category) => {
    // TODO: finish
    const response = await fetch(`${API_URI}/posts`, {method: 'POST', headers})
    const data = await response.json();
    return data;
};

export const votePost = async (id, option) => {
    const response = await fetch(`${API_URI}/posts/${id}`, {method: 'POST', headers, body: JSON.stringify({ option })})
    const data = await response.json();
    return data;
};

export const addComment = async (id, timestamp, body, author, parentId) => {
    // TODO: body
    const response = await fetch(`${API_URI}/comments`, {method: 'POST', headers})
    const data = await response.json();
    return data;
};

export const voteComment = async (id, option) => {
    const response = await fetch(`${API_URI}/comments/${id}`, {method: 'POST', headers, body: JSON.stringify({ option })})
    const data = await response.json();
    return data;
};

/* PUT */

export const editPost = async (id, title, body) => {
    // TODO: body
    const response = await fetch(`${API_URI}/posts/${id}`, {method: 'PUT', headers})
    const data = await response.json();
    return data;
};

export const editComment = async (id, timestamp, body) => {
    // TODO: body
    const response = await fetch(`${API_URI}/comments/${id}`, {method: 'PUT', headers})
    const data = await response.json();
    return data;
};

/* DELETE */

export const deletePost = async (id) => {
    // TODO: body
    const response = await fetch(`${API_URI}/posts/${id}`, {method: 'DELETE', headers})
    const data = await response.json();
    return data;
};

export const deleteComment = async (id) => {
    // TODO: body
    const response = await fetch(`${API_URI}/comments/${id}`, {method: 'DELETE', headers})
    const data = await response.json();
    return data;
};