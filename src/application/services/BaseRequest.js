export default class BaseRequest {
    toJSON() {
        let formData = {};

        for (var key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                formData[key.startsWith('_') ? key.substr(1) : key] = this[key];
            }
        }

        return formData;
    }
}
