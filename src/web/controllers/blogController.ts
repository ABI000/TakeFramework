import { BaseController } from "./baseController";

class BlogController extends BaseController {
    /**
     * @openapi
     * /:
     *   get:
     *     description: Welcome to swagger-jsdoc!
     *     responses:
     *       200:
     *         description: Returns a mysterious string.
     */
    async get(ctx: any) {
        // 处理获取用户逻辑
        ctx.body = 'Get blog information';
    }

    async post(ctx: any) {
        // 处理创建用户逻辑
        ctx.body = 'Create a new blog';
    }

    async update(ctx: any) {
        // 处理更新用户逻辑
        ctx.body = 'Update blog information';
    }

    async delete(ctx: any) {
        // 处理删除用户逻辑
        ctx.body = 'Delete blog';
    }
}
export default new BlogController();;
