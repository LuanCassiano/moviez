import { produce } from 'immer';
import { MovieTypes } from './types';
import { IMovieStateReducer } from './state';
import { IActionMovie } from './interfaces/IActionMovie';

const INITIAL_STATE: IMovieStateReducer = {
    upcoming: [],
    loading: false,
};

export default function Movie(state = INITIAL_STATE, action: IActionMovie) {
    return produce(state, draft => {
        switch (action.type) {
            case MovieTypes.GET_UPCOMING_REQUEST: {
                draft.loading = true;
                break;
            }

            case MovieTypes.GET_UPCOMING_SUCCESS: {
                draft.loading = false;
                draft.upcoming = action.payload;
                break;
            }

            default:
                break;
        }
    });
}
