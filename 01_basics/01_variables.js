const accountId = 13564
let accountEmail = "arvind@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail ="kumar@gmail.com"
accountPassword = "345345"
accountCity = "New Delhi"


/*

Prefer not to use var
because of issue in block scope and functional scope

*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);