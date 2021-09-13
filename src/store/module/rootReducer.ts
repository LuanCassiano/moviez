import { combineReducers } from 'redux';

import movie from './Movie/reducer';

export const rootReducer = combineReducers({
    movie,
});

export type RootState = ReturnType<typeof rootReducer>;
