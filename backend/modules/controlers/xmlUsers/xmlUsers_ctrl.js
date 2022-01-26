"use strict";
module.exports = {
  getxmlUsers,
};

function getxmlUsers(req, res) {
  async function getxmlUsers_method() {
    const returnData = `
        <persons>

    <person>

        <id>3</id>

        <firstName>Jen</firstName>

        <lastName>Doe</lastName>

    </person>

    <person>

        <id>6</id>

        <firstName>Stephanie</firstName>

        <lastName>Joe</lastName>

    </person>

    <person>

        <id>1</id>

        <firstName>Victoria</firstName>

        <lastName>Doe</lastName>

    </person>

</persons>
`;
res.header("Content-Type", "application/xml");
res.status(200).send(returnData);
  }

  getxmlUsers_method().then(function (data) {});
}
