import ExceptionHandler from '~/infrastructure/exceptions/Handler';

export default class BaseService {
    static async handleAsync(serviceCall, modeler = null) {
        try {
            const data = await serviceCall;
            if (typeof modeler === 'function') {
                return modeler(data);
            }
            return data;
        } catch (e) {
            return new ExceptionHandler(e);
        }
    }
}
