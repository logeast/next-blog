const ipUrl = 'http://127.0.0.1:7001/default/';

const servicePath = {
    getArticleList: ipUrl + 'getArticleList', // 获取文章列表
    getTypeInfo: ipUrl + 'getTypeInfo', // 获取分类

    getArticleById: ipUrl + 'getArticleById', // 根据 ID 获取文章列表
    getArticleByAddTime: ipUrl + 'getArticleByAddTime', // 根据创建时间获取文章列表
    getArticleByTypeId: ipUrl + 'getArticleByTypeId', // 根据分类获取文章列表
};

export default servicePath;
