/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1604827299020_248';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.mysql = {
        // database configuration
        client: {
            // host
            host: 'localhost',
            // port
            port: '3306',
            // username
            user: 'root',
            // password
            password: '12345678',
            // database
            database: 'next_blog',
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    };

    config.security = {
        csrf: false,
        domainWhiteList: ['*'],
    };

    config.cors = {
        // origin: 'http://localhost:3000', //只允许这个域进行访问接口
        credentials: true, // 开启认证
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };

    config.swaggerdoc = {
        dirScanner: './app/controller',
        apiInfo: {
            title: 'API 接口',
            description: '服务端提供的 API 接口',
            version: '1.0.0',
        },
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            // apikey: {
            //   type: 'apiKey',
            //   name: 'clientkey',
            //   in: 'header',
            // },
            // oauth2: {
            //   type: 'oauth2',
            //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
            //   flow: 'password',
            //   scopes: {
            //     'write:access_token': 'write access_token',
            //     'read:access_token': 'read access_token',
            //   },
            // },
        },
        enableSecurity: false,
        // enableValidate: true,
        routerMap: false,
        enable: true,
    };

    return {
        ...config,
        ...userConfig,
    };
};
