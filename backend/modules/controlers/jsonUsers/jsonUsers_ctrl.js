"use strict";
const fs = require("fs");
module.exports = {
  getJsonUsers,
};

function getJsonUsers(req, res) {
  async function getJsonUsers_method() {
    fs.readFile(__dirname + "/jsonUser.json", (err, data) => {
      res.json({
        msg: `XML user list`,
        data: JSON.parse(data),
      });
    });
  }

  getJsonUsers_method().then(function (data) {});
}
