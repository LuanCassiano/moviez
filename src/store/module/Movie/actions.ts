import { IMovie } from '../../../interfaces/IMovie';
import { MovieTypes } from './types';

export function getUpcomingRequest() {
    return {
        type: MovieTypes.GET_UPCOMING_REQUEST,
    };
}

export function getUpcomingSuccess(data: IMovie[]) {
    return {
        type: MovieTypes.GET_UPCOMING_SUCCESS,
        payload: data,
    };
}
