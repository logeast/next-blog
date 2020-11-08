'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        console.log('---->', 'mysql', app.mysql);
        const result = await app.mysql.get('article', {});
        console.log(result);
        ctx.body = result;
        // ctx.body = 'xx';
    }

    async list() {
        const { ctx } = this;
        ctx.body = 'lists';
    }

    async getArticleList() {
        let sql = `
            SELECT article.id as id,
            article.title as title,
            article.content as content,
            article.introduce as introduce,
            article.add_time as add_time,
            article.view_count as view_count
            FROM article LEFT JOIN type ON article.type_id = type.id;
        `;
        // .type.type_name as type_name // 如何查询 LEFT JOIN 的表

        const results = await this.app.mysql.query(sql);

        this.ctx.body = {
            data: results,
        };
    }
}

module.exports = HomeController;
