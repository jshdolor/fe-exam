import Http from '~/infrastructure/client/Http';

export default class ApiClient {
    static url = '';
    static API_BASE = process.env.VUE_APP_V1_ENDPOINT;
    static options = {};

    static withAuth(token) {
        this.options = {
            //since bearer token
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        return ApiClient;
    }

    static setUrl(url) {
        this.url = this.API_BASE + url;
        return ApiClient;
    }

    static post(data, options = {}) {
        let http = new Http();
        options = { ...this.options, ...options };
        return http.post(this.url, data, options);
    }

    static get(params, options = {}) {
        let http = new Http();
        options = { ...this.options, ...options };
        return http.get(this.url, params, options);
    }
}
