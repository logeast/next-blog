const ipUrl = 'http://127.0.0.1:7001/default/';

const defaultServicePath = {
    checkLogin: ipUrl + 'checkLogin', // 检查用户名和密码
    getArticleList: ipUrl + 'getArticleList', // 获取文章列表
    getTypeInfo: ipUrl + 'getTypeInfo', // 获取文章类型
};

export default defaultServicePath;
