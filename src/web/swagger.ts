/*
 * @Author: linzq
 * @Date: 2020-11-25 10:02:48
 * @LastEditors: linzq
 * @LastEditTime: 2021-04-16 15:40:35
 * @Description: swagger配置
 */
import Router from 'koa-router';
import swaggerJSDoc from 'swagger-jsdoc';
const router: Router = new Router();
const swaggerDefinition = {
    info: {
        description:
            'This is a sample server Koa2 server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).',
        version: '1.0.0',
        title: 'Koa2_server Swagger',
        // 服务条款
        // termsOfService: 'http://swagger.io/terms/',
        contact: {
            name: 'Contact developers',
            url: 'https://mail.qq.com/',
            email: '741167479@qq.com'
        },
        // 开源协议
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    basePath: '/', // Base path (optional), host/basePath
    schemes: ['http', 'https'],
    securityDefinitions: {
        // TODO：不知道怎么用，等整明白了再说
        // server_auth: {
        //   type: 'oauth2',
        //   description: '描述',
        //   tokenUrl: 'http://localhost:4000/common/oauth',
        //   flow: 'password',
        //   scopes: {
        //     oauth2_token: 'modify pets in your account'
        //   }
        // },
        token: {
            description: ``,
            type: 'apiKey',
            name: 'token',
            in: 'header'
        }
    },
    components: {
        description: {
            description: '登入成功'
        }
    },
    definitions: {

    }
};
const options = {
    swaggerDefinition,
    // 写有注解的router的存放地址
    apis: ['./src/web/routes/*.ts']
};
const swaggerSpec = swaggerJSDoc(options);
// 通过路由获取生成的注解文件
router.get('/swagger.json', async ctx => {
    ctx.set('Content-Type', 'application/json'); // , application/x-www-form-urlencoded
    ctx.body = swaggerSpec;
});

export default router;
// 将页面暴露出去