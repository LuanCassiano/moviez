import { Action } from 'redux';
import { IMovie } from '../../../../interfaces/IMovie';
import { MovieTypes } from '../types';

interface IActionUpcomingRequest extends Action {
    type: MovieTypes.GET_UPCOMING_REQUEST;
}

interface IActionUpcomingSuccess extends Action {
    type: MovieTypes.GET_UPCOMING_SUCCESS;
    payload: IMovie[];
}

interface IActionNowPlayingRequest extends Action {
    type: MovieTypes.GET_NOW_PLAYING_REQUEST;
}

interface IActionNowPlayingSuccess extends Action {
    type: MovieTypes.GET_NOW_PLAYING_SUCCESS;
    payload: IMovie[];
}

export type IActionMovie =
    | IActionUpcomingRequest
    | IActionUpcomingSuccess
    | IActionNowPlayingRequest
    | IActionNowPlayingSuccess;
