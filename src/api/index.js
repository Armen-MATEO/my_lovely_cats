import axios from 'axios';

export const fetchCategories = () => axios.get(`https://api.thecatapi.com/v1/categories`);
export const fetchImages=()=> axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
export const fetchName=(ids)=> axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${ids}`)
export const fetchAllCats=()=>axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
export const fetchMoreCats=()=>axios.get('https://api.thecatapi.com/v1/images/search?limit=10')