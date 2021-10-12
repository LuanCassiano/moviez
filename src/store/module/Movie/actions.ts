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

export function getNowPlayingRequest() {
    return {
        type: MovieTypes.GET_NOW_PLAYING_REQUEST,
    };
}

export function getNowPlayingSuccess(data: IMovie[]) {
    return {
        type: MovieTypes.GET_NOW_PLAYING_SUCCESS,
        payload: data,
    };
}
