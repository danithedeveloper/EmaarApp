import {ResponseCode} from './enums';
import {ErrorMessages} from './assets/Strings';

const generateErrorMesssage = response => {
    return response.status === ResponseCode.ServerError
        ? ErrorMessages.intervalServer
        : response.error;
};

export default {
    generateErrorMesssage,
};
