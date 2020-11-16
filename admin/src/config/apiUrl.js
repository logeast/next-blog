const ipUrl = 'http://127.0.0.1:7001/admin/';

const servicePath = {
    checkLogin: ipUrl + 'checkLogin', // 检查用户名和密码
    getTypeInfo: ipUrl + 'getTypeInfo', // 获取文章类型
    addArticle: ipUrl + 'addArticle', // 添加文章
    updateArticle: ipUrl + 'updateArticle', // 更新文章
};

export default servicePath;
