var express = require('express');
var router = express.Router();
let times = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  times ++;
  res.send('User accesses are: ' + times);
});

module.exports = router;


// Modifying the users resource end point.
// 1) Open users.js in VSCode so you can edit it.
// 2) Just after setting the router, create a variable times which is initialized to 0.
// 3) Inside the router callback function before the send, add one to times;
// 4) Change the send text so the response is something like “User accesses are: 4” where
// the number is value of times. You can use concatenation or string interpolation.
// 5) Use npm to start a local server and check your code on localhost.3000/users. Every
// reload should increase the value displayed by one.
// 6) Add and commit the changes.
// 7) Push to origin main
// 8) Direct your browser to the Render server with /users and verify that it is working
// remotely.
// 9) Screen shot 7 on VSCode showing the modified router for users.
// 10) Screen shot 8 on Browser showing the result for users
