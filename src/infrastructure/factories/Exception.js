import ValidationException from '~/infrastructure/exceptions/ValidationException';
import UnhandledException from '~/infrastructure/exceptions/UnhandledException';
import UnauthorizedException from '~/infrastructure/exceptions/Unauthorized';

class ExceptionFactory {
    static make(errCode = 500, error) {
        const exceptionClsMapping = {
            422: ValidationException,
            401: UnauthorizedException,
        };

        if (exceptionClsMapping[errCode]) {
            const exception = new exceptionClsMapping[errCode]({ error });
            if (exception.isContinuous) {
                return exception;
            }
            return exception;
        }

        return new UnhandledException({ error });
    }
}

export default ExceptionFactory;
