class ValidationException {
    constructor({ error }) {
        this.error = error;
        this._errorMessages = this.error?.errors || {};
    }

    get isContinuous() {
        return true;
    }

    get errorMessages() {
        return this._errorMessages;
    }
}

export default ValidationException;
