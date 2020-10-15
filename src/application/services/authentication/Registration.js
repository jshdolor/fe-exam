import ApiClient from '~/infrastructure/client/ApiClient';
// import ExceptionHandler from '~/infrastructure/exception/Handler';
import BaseService from '~/application/services/BaseService';
import UserProfileModel from '~/application/models/UserProfile';

class RegistrationService extends BaseService {
    static async handle(postValues) {
        return this.handleAsync(
            ApiClient.setUrl('/auth/register').post(postValues),
            ({ data = {} }) => {
                return {
                    user: new UserProfileModel(data.user),
                    token: data.access_token,
                };
            }
        );
    }
}

export default RegistrationService;
