import {
    LIST_INITIATE,
    LIST_SUCCESS,
    LIST_FAILED,
} from '../constants/index';

const initialState = {
    loader: false,
    data: [],
};

export function ListReducer(state = initialState, action) {
    switch (action.type) {
        case LIST_INITIATE: {
            return {
                ...state,
                loading: true,
            };
        }
        case LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }
        case LIST_FAILED: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }

        default:
            return state;
    }
}
