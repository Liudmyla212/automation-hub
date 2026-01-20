// function checkAccess (userAge) {
//     if (userAge >= 21) {
//         return true;
//     }
//     else {return false;
//     }
// }

const checkAccess = userAge => userAge >= 21;
let result1 = checkAccess(30);
let result2 = checkAccess(18);
console.log("Age 30. Access allowed:", result1);
console.log("Age 18. Access allowed:", result2 );