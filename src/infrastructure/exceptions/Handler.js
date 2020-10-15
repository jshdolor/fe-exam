import ExceptionFactory from '~/infrastructure/factories/Exception';
import EventEmitter from '~/infrastructure/EventEmitter';

class ExceptionHandler {
    constructor(error) {
        const statusCode = error?.response?.status;

        const errorData = error?.response?.data;

        const exception = ExceptionFactory.make(statusCode, errorData);

        if (exception.isContinuous) {
            return exception;
        }
        EventEmitter.$emit('showMessage', exception.errorMessages);
        return { errorMessages: {} };
    }
}

export default ExceptionHandler;
