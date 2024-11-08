const accountId = 123455
let accountEmail = "arham@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"

// accountId = 2 // Not Allowed

accountEmail = "arh@arh.com"
accountPassword = 343434
accountCity = "Fsd"
let accountState;
console.log(accountId);

/* prefer not to use var 
    because of issue in block scope & functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);


