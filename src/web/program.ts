
import 'reflect-metadata';

import { IBlogRepository } from '@/domain/Iblog_repository';

import { IBlogService } from '@/server.contracts/IBlogServer';

import  BlogRepository  from '@/orm/blogRepository';
import  BlogService  from '@/server/BlogServer';
import Koa from 'koa'
import { container } from "tsyringe";
const server = new Koa()



container.register<IBlogRepository>("BlogRepository", { useClass: BlogRepository });
container.register<IBlogService>("BlogService", { useClass: BlogService });
let blogService = container.resolve(BlogService);
blogService.SingleAsync(BigInt(123));
/**
 * Add here only development middlewares
 */
/* if (process.env.NODE_ENV === 'development') {
  server.use(logger())
} */

/**
 * Pass to our server instance middlewares
 */
//server.use(routerResponse).use(errorHandler).use(bodyParser())

/**
 * Apply to our server the api router
 */
//applyApiMiddleware(server)

server.listen(3000,"localhost")
