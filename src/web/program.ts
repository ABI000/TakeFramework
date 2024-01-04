
import 'reflect-metadata';

import { IBlogRepository } from '@/domain/Iblog_repository';
import { IBlogService } from '@/server.contracts/IBlogServer';
import BlogRepository from '@/orm/blogRepository';
import BlogService from '@/server/BlogServer';
import Koa from 'koa'
import { container } from "tsyringe";
import router from './routes';
import errorMiddleware from './middleware/errorMiddleware';

import swagger from './swagger';
import { koaSwagger } from 'koa2-swagger-ui';

const server = new Koa();

//register Service
container.register<IBlogService>("BlogService", { useClass: BlogService });
//register Repository
container.register<IBlogRepository>("BlogRepository", { useClass: BlogRepository });

server.use(swagger.routes());
server.use(
    koaSwagger({
        routePrefix: '/swagger', // host at /swagger instead of default /docs
        swaggerOptions: {
            url: '/swagger.json' // example path to json
        }
    })
);



//register middleware
server.use(errorMiddleware);

//register roter
server.use(router.routes());


server.listen(3000, "localhost")


