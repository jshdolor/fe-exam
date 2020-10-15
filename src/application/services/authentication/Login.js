import ApiClient from '~/infrastructure/client/ApiClient';
import BaseService from '~/application/services/BaseService';
import UserProfileModel from '~/application/models/UserProfile';

class LoginService extends BaseService {
    static async handle(request) {
        return this.handleAsync(
            ApiClient.setUrl('/auth/login').post(request),
            ({ data = {} }) => {
                return {
                    user: new UserProfileModel(data.user),
                    token: data.access_token,
                };
            }
        );
    }
}

export default LoginService;
