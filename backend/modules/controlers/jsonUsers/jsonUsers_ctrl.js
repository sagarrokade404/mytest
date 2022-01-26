'use strict';
module.exports = {
    getJsonUsers
}

function getJsonUsers(req,res) {
    async function getJsonUsers_method() {
 
        const returnData = {

            "person": [
        
                {
        
                    "id": 10,
        
                    "firstName": "John",
        
                    "lastName": "Doe"
        
                },
        
                {
        
                    "id": 5,
        
                    "firstName": "Jack",
        
                    "lastName": "Doe"
        
                },
        
                {
        
                    "id": 7,
        
                    "firstName": "James",
        
                    "lastName": "Doe"
        
                }
        
            ]
        
        }

            res.json( {
                msg: `JSON user list`,
                data: returnData
            })
        
  
    } 



    getJsonUsers_method().then( function(data) {

    })
}
