module.exports = function (express) {
    const router = express.Router();
    
    require('./controlers/jsonUsers/jsonUserRouts')(router);
    require('./controlers/xmlUsers/xmlUsers_routes')(router);
    return router;
}