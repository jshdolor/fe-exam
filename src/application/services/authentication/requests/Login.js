import BaseRequest from '~/application/services/BaseRequest';

export default class LoginRequest extends BaseRequest {
    constructor(data = {}) {
        super();
        this._password = data.password;
        this._username = data.email;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }
}
