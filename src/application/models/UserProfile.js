class UserProfile {
    constructor(data = {}) {
        this._fullName = data.full_name;
        this._email = data.email;
        this._avatar = data.avatar;
        this._phoneNumber = data.phone_number;
    }

    get name() {
        return this._fullName;
    }

    get email() {
        return this._email;
    }

    get avatar() {
        return this._avatar;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
}

export default UserProfile;
