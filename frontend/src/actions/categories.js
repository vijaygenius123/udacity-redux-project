import { getCategories } from '../config/api';

/* CONSTANTS */

export const GET_ALL_CATEGORIES_START = 'GET_ALL_CATEGORIES_START';
export const GET_ALL_CATEGORIES_END = 'GET_ALL_CATEGORIES_END';
export const GET_ALL_CATEGORIES_ERROR = 'GET_ALL_CATEGORIES_ERROR';

/* GET ALL CATEGORIES */

export const getAllCategoriesStart = () => ({
  type: GET_ALL_CATEGORIES_START,
});

export const getAllCategoriesEnd = categories => ({
  type: GET_ALL_CATEGORIES_END,
  categories,
});

export const getAllCategoriesError = error => ({
  type: GET_ALL_CATEGORIES_ERROR,
  error,
});

export const getAllCategories = () => async (dispatch) => {
  dispatch(getAllCategoriesStart());
  try {
    const categories = await getCategories();
    dispatch(getAllCategoriesEnd(categories));
  } catch (error) {
    dispatch(getAllCategoriesError(error));
  }
};