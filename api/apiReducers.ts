import { questionAPI } from './questions'

export const apiReducers = {
  [questionAPI.reducerPath]: questionAPI.reducer,
};
