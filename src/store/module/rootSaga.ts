import { all } from 'redux-saga/effects';

import movie from './Movie/sagas';

export default function* rootSaga(): Generator {
    yield all([movie]);
}
