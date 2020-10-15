import BaseRequest from '~/application/services/BaseRequest';

export default class VerificationRequest extends BaseRequest {
    constructor(data = {}) {
        super();
        this._via = 'email';
        this._token = data.token;
    }

    get token() {
        return this._token;
    }

    get via() {
        return this._via;
    }
}
