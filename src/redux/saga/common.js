
import {axiosClient} from '../../services/api';
import {LIST_FAILED, LIST_INITIATE, LIST_SUCCESS, OBSERVE_LIST} from '../constants';
import {ResponseCode} from '../../infrastructure/enums';
import ErrorHandler from '../../infrastructure/ErrorHandler';
import {takeLatest, put, call} from 'redux-saga/effects';
import ENV from '../../env.json';
import {GET_HOLIDAY_LIST} from '../../services/url';

const fetchData = action => axiosClient.get(`${GET_HOLIDAY_LIST}?key=${ENV.GOOGLE_CALANDER_API_KEY}`);

function* fetchDataSaga(action) {
    yield put({
        type: LIST_INITIATE,
    });
    const response = yield call(fetchData, action);
    if (response.status === ResponseCode.OK) {
        yield put({
            type: LIST_SUCCESS,
            payload: response.data.items,
        });
    } else {
        yield put({
            type: LIST_FAILED,
            error: ErrorHandler.generateErrorMesssage(response),
        });
    }
}

export default function* watcherSaga() {
    yield takeLatest(OBSERVE_LIST, fetchDataSaga);
}
