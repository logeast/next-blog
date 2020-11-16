'use strict';

const Controller = require('egg').Controller;

/**
 * @controller Admin 管理页接口
 */
class MainController extends Controller {
    async index() {
        // 首页的文章列表数据
        this.ctx.body = 'hi SiFang';
    }

    /**
     * @summary 检查登录
     * @description 判断用户名密码是否正确
     * @router post /admin/checkLogin
     */
    async checkLogin() {
        const userName = this.ctx.request.body.userName;
        const password = this.ctx.request.body.password;

        const sql = `
            SELECT userName FROM admin_user
            WHERE userName = '${userName}'
            AND password = '${password}';
        `;

        const res = await this.app.mysql.query(sql);
        console.log('======>res', res, res.length);
        if (res.length > 0) {
            //登录成功,进行session缓存
            let openId = new Date().getTime();
            this.ctx.session.openId = { openId: openId };
            this.ctx.body = { data: '登录成功', openId: openId };
        } else {
            this.ctx.body = { data: '登录失败' };
        }
    }

    /**
     * 获取文章类型
     */
    async getTypeInfo() {
        const resType = await this.app.mysql.select('type');
        this.ctx.body = { data: resType };
    }

    /**
     * 添加文章
     */
    async addArticle() {
        const tempArticle = this.ctx.request.body;
        const result = await this.app.mysql.insert('article', tempArticle);
        const insertSuccess = result.affectedRows === 1;
        const insertId = result.insertId;

        this.ctx.body = {
            isSuceess: insertSuccess,
            insertId,
        };
    }

    /**
     * 更新文章
     */
    async updateArticle() {
        const tempArticle = this.ctx.request.body;
        console.log('====> tempa', tempArticle);
        const result = await this.app.mysql.update('article', tempArticle);
        const updateSuccess = result.affectedRows === 1;

        this.ctx.body = {
            isSuceess: updateSuccess,
        };
    }

    /**
     * 通过 id 获取文章
     */
    async getArticleById() {
        const id = this.ctx.params.id;
        const sql = `
            SELECT article.id as id,
            article.title as title,
            article.content as content,
            article.introduce as introduce,
            article.add_time as add_time,
            article.view_count as view_count,
            type.name as type_name
            FROM article LEFT JOIN type ON article.type_id = type.id
            WHERE atricle.id = ${id};
        `;

        const result = await this.app.mysql.query(sql);

        this.ctx.body = {
            data: result,
        };
    }

    /**
     * 获取列表
     */
    async getArticleList() {
        const sql = `
            SELECT article.id as id,
            article.title as title,
            article.content as content,
            article.introduce as introduce,
            article.add_time as add_time,
            article.view_count as view_count,
            type.name as type_name
            FROM article LEFT JOIN type ON article.type_id = type.id
            ORDER BY article.id DESC;
        `;

        const result = await this.app.mysql.query(sql);

        this.ctx.body = {
            list: result,
        };
    }

    /**
     * 删除文章
     */
    async deleteAtricle() {
        const id = this.ctx.params.id;
        const result = await this.app.mysql.delete('article', { id });

        this.ctx.body = {
            data: result,
        };
    }
}

module.exports = MainController;
