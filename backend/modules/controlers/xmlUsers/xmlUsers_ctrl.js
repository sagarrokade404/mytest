"use strict";
const fs = require("fs");

const { XMLParser } = require("fast-xml-parser");

const options = {
  ignoreAttributes: false,
};

const parser = new XMLParser(options);

module.exports = {
  getxmlUsers,
};

function getxmlUsers(req, res) {
  async function getxmlUsers_method() {
    fs.readFile(__dirname + "/xmlUser.xml", (err, data) => {
      console.log("__dirname", __dirname);
      let jsonObj = parser.parse(data);
      res.json({
        msg: `XML user list`,
        data: jsonObj.catalog.persons,
      });
    });
  }

  getxmlUsers_method().then(function (data) {});
}
