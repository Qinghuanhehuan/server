const Controller = require('egg').Controller
class UserController extends Controller {
    async index() {
        // this.ctx.body = [
        //     { name: 'Tom' }
        // ]
        const { ctx } = this
        ctx.body = await ctx.service.user.getAll()
    }

}
module.exports = UserController
