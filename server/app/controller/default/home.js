'use strict';

const Controller = require('egg').Controller;

/**
 * @controller Default 展示页接口
 */
class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        const result = await app.mysql.get('article', {});
        ctx.body = result;
    }

    /**
     * @summary 获取列表
     * @description 获取文章列表
     * @router get /default/getArticleList
     */
    async getArticleList() {
        const sql = `
            SELECT article.id as id,
            article.thumb as thumb,
            article.title as title,
            article.content as content,
            article.introduce as introduce,
            article.add_time as add_time,
            article.view_count as view_count,
            type.name as type_name
            FROM article LEFT JOIN type ON article.type_id = type.id
        `;

        const results = await this.app.mysql.query(sql);

        this.ctx.body = results;
    }

    /**
     * @summary 通过 ID 获取文章列表
     * @description 通过 ID 获取文章列表
     * @router get /default/getArticleById
     * @request query integer id 文章ID
     */
    async getArticleById() {
        const id = this.ctx.params.id;

        const sql = `
            SELECT article.title as title,
            article.content as content,
            article.introduce as introduce,
            article.add_time as add_time,
            article.view_count as view_count,
            type.name as type_name
            FROM article LEFT JOIN type ON article.type_id = type.id
            WHERE article.id=${id};
        `;

        const results = await this.app.mysql.query(sql);

        this.ctx.body = results;
    }

    /**
     * @summary 获取分类
     * @description
     * @router get /default/getTypeInfo
     */
    async getTypeInfo() {
        const sql = `
            SELECT type.id as id,
            type.name as type_name
            FROM type;
        `;

        const results = await this.app.mysql.query(sql);
        this.ctx.body = results;
    }

    /**
     * @summary 根据分类获取文章列表
     * @description 根据分类获取文章列表
     * @router get /default/getArticleByTypeId
     * @request query integer type_id 分类 ID
     */
    async getArticleByTypeId() {
        const type_id = this.ctx.params.type_id;

        const sql = `
        SELECT article.title as title,
        article.content as content,
        article.introduce as introduce,
        article.add_time as add_time,
        article.view_count as view_count,
        type.name as type_name
        FROM article LEFT JOIN type ON article.type_id = type.id
        WHERE article.id=${type_id};
    `;

        const results = await this.app.mysql.query(sql);

        this.ctx.body = results;
    }
}

module.exports = HomeController;
