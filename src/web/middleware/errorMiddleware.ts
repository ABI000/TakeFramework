import { HttpError } from '@/core/exception/http-error';
import { Context, Next } from 'koa';

const errorMiddleware = async (ctx: Context, next: Next): Promise<void> => {
    try {
        await next();
    } catch (err) {
        if (err instanceof HttpError) {
            ctx.status = err.httpCode;
            ctx.body = {
                message: err.msg,
                code: err.code
            };
        } else {
            ctx.status = 500;
            ctx.body = {
                message: "inner error",
                code: "inner error"
            };
        }
    }
}
export default errorMiddleware;