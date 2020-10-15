import ApiClient from '~/infrastructure/client/ApiClient';
// import ExceptionHandler from '~/infrastructure/exception/Handler';
// import AuthModel from '~/Application/Models/Auth';
import BaseService from '~/application/services/BaseService';
import store from '~/framework/store';

class VerificationService extends BaseService {
    static async handle(request) {
        const token = store.state.session?.token;

        return this.handleAsync(
            ApiClient.withAuth(token)
                .setUrl('/auth/verification/verify')
                .post(request),
            ({ data = {} }) => data
        );
    }
}

export default VerificationService;
