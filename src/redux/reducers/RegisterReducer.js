import {USER_DETAILS} from '../constants';

const initialState = {
    loader: false,
    data: [],
};

export function RegisterReducer(state = initialState, action) {
    switch (action.type) {
        case USER_DETAILS: {
            return {
                ...state,
                loading: true,
            };
        }
        default:
            return state;
    }
}
