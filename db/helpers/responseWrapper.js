
export class ResponseWrapper {
    _data = null;
    _error = null;
    _code = null;

    set data(value) {
        if (this.isObject(value)) {
            this._data = { ...value };
        }

        this._code = 200;
    }

    get data() {
        return this._data;
    }

    set error(err) {
        this._error = err;
        this._code = 503;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        this._code = code;
    }

    isObject(a) {
        return (!!a) && (a.constructor === Object);
    };
}
