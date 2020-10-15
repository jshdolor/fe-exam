const email = [
    (v) => !!v || 'Email is required',
    (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
];

const password = [
    (v) => !!v || 'Password is required',
    (v) => (v && v.length >= 8) || 'The password must be at least 8 characters',
];

const registration = {
    email,
    full_name: [(v) => !!v || 'Full Name is required'],
    password,
};

const login = {
    username: [(v) => !!v || 'Username is required'],
    password: [(v) => !!v || 'Password is required'],
};

const verification = {
    token: [(v) => !!v || 'Verification Code is required'],
};

export { registration, verification, login };
