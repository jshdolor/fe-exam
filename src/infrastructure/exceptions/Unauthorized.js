class UnauthorizedException {
    constructor({ error = {}, message = 'Unauthorized' } = {}) {
        this.error = error;
        this._errorMessages = error.message || message;
    }

    get errorMessages() {
        return this._errorMessages;
    }
}

export default UnauthorizedException;
