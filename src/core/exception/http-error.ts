export class HttpError {
    constructor(msg: string = "inner error", code: string = "inner error", httpCode: number = 500) {
        this.msg = msg;
        this.code = code;
        this.httpCode = httpCode;
    }
    msg: string;
    code: string;
    httpCode: number;
}
export class BusinessHttpError extends HttpError {
    constructor(msg: string, code: string = "business error", httpCode: number = 400) {
        super(msg, code, httpCode);
    }
}
export class NotFoundError extends BusinessHttpError {
    constructor(msg: string, code: string = "NotFound") {
        super(msg, code);
    }
}
export class BadRequest extends BusinessHttpError {
    constructor(msg: string, code: string = "badRequest") {
        super(msg, code);
    }
}
export class AuthenticationError extends BusinessHttpError {
    constructor(msg: string, code: string = "authenticationError") {
        super(msg, code);
    }
}