//1. callback function 
// function doHomeWork(subject,callback){
//     console.info("study:" +subject);
//     callback();
// }

// var alertMsg = function(){
//     console.log("alert");
// }
// doHomeWork('math',alertMsg);

//2.******** another simple example */ 
// function print( ans ){
//     console.log(ans) ; // 7
// }
// function add(a, b, callback){ // here callback = print
//     callback(a+b) ;
// }
// add(2,5,print); // print function as a parameter 

/***************
 *3. A login function which performs
 *  user login with the server asynchronously
 */
// 

const axios = require('axios');

    function login(loginData,callbackSuccess,callBackFailure)  {
      axios
      .post("/api/login",loginData)
      .then((response) => {
        callbackSuccess(response);
      })
      .catch((error) => {
        callBackFailure(error);
      });
    }
    
    function callbackSuccess(data) {
      console.log("Login response :",data);
    }
    
    function callBackFailure(error) {
      console.log("Login failed :",error);
    }
    
    let userData = {
      username : "test",
      password : "abcd123"
    }
    
    login(userData,callbackSuccess,callBackFailure);