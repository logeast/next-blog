'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;
    const adminauth = app.middleware.adminauth;

    router.get('/admin/index', controller.admin.main.index);
    router.get('/admin/getTypeInfo', controller.admin.main.getTypeInfo);
    router.post(
        '/admin/checkLogin',
        // adminauth,
        controller.admin.main.checkLogin,
    );
    router.post('/admin/addArticle', controller.admin.main.addArticle);
    router.post('/admin/updateArticle', controller.admin.main.updateArticle);
    router.get('/admin/getArticleList', controller.admin.main.getArticleList);
    router.get('/admin/deleteAtricle/:id', controller.admin.main.deleteAtricle);
    router.get(
        '/admin/getArticleById/:id',
        controller.admin.main.getArticleById,
    );
};
