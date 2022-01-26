module.exports = function (router) {


    var product_list = require('./jsonUsers_ctrl');
    router.get('/getJsonUsers',  product_list.getJsonUsers);
    return router;
}
