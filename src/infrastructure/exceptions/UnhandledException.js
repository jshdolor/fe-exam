class UnhandledException {
    constructor({ error = {}, message = 'An error has occured' } = {}) {
        this.error = error;
        this._errorMessages = message;
    }

    get errorMessages() {
        return this._errorMessages;
    }
}

export default UnhandledException;
