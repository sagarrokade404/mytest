module.exports = function (router) {


    var product_list = require('./xmlUsers_ctrl');
    router.get('/getxmlUsers',  product_list.getxmlUsers);
    return router;
}
