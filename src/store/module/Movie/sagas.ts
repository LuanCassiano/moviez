import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../service/api';

import { IMovie } from '../../../interfaces/IMovie';
import { IApiResponse } from '../../../interfaces/IApiResponse';

import { API_KEY } from '../../../global/Constants';

import { MovieTypes } from './types';

import { getUpcomingSuccess } from './actions';

export function* getUpcoming() {
    try {
        const response: AxiosResponse<IApiResponse<IMovie[]>> = yield call(
            api.get,
            '/movie/upcoming',
            {
                params: {
                    api_key: API_KEY,
                    page: 1,
                    language: 'pt-BR',
                },
            },
        );

        yield put(getUpcomingSuccess(response.data.results));
    } catch (error) {
        console.tron.log('error', error);
    }
}

export default all([takeLatest(MovieTypes.GET_UPCOMING_REQUEST, getUpcoming)]);
