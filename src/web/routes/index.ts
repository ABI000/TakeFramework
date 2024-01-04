import Router from 'koa-router';
import blogController from '../controllers/blogController';
const router: Router = new Router();
//todo:Automated registration 
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/blogs', blogController.get);
router.allowedMethods();
export default router;