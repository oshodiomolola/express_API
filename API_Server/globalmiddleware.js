const fs = require('fs')

function checkApiKey(req, res, next) {
  const apiKey = req.headers.api_key
  const users = fs.readFileSync("./db/users.json")
  const usersObj = JSON.parse(users)

  if (!apiKey) {
    res.status(401).json({
      message: "You are not authenticated. api_key required"
    })
  }

  const foundUser = usersObj.find(user => user.api_key === apiKey)

  if (!foundUser) {
    res.status(401).json({
      message: "You are not authenticated"
    })
  }
  next()
}

// function checkRole(req, res, next) {
//   const apiKey = req.headers.api_Key;
//   const users = fs.readFileSync("./db/users.json");
//   const usersObj = JSON.parse(users);

//   console.log("API Key from Request:", api_Key);
//   console.log("API Keys from usersObj:", usersObj.map(user => user.api_Key));
  

//   const foundIndex = usersObj.findIndex(user => user.api_Key == apiKey);
//   console.log(foundIndex);

//   // Check if a user with the given API key was found
//   if (foundIndex === -1) {
//     return res.status(401).json({
//       message: "Invalid API key. You are not authorized."
//     });
//   }

//   // Check the role of the user
//   if (usersObj[foundIndex].role !== "admin") {
//     return res.status(403).json({
//       message: "You do not have the required permissions."
//     });
//   }

//   // If the user is an admin, continue to the next middleware or route handler
//   next();
// }


function checkRole(req, res, next) {
  const apiKey = req.headers.api_Key
  const users = fs.readFileSync("./db/users.json")
  const usersObj = JSON.parse(users)

  console.log("API Key from Request:", apiKey);
  console.log("API Keys from usersObj:", usersObj.map(user => user.api_Key));

 const foundUser = userObj.find(user=> user.api_key == apiKey)
  if (foundUser.user_type != "admin") {
    return res.status(401).json({
      message: "you are not authorized"
    })
  }
  next()
};


function basicAuth(req, res, next) {
  const authHeaders = req.headers.authorization
  console.log(authHeaders)
  if(!authHeaders) {
    res.status(401).json({message: "invalid username or password"})
  }

  const base64 = new Buffer.from(authHeaders.split(" ")[1], 'base64')
  console.log(base64)
  const base64String = base64.tostring()
    const [username, password] = base64String.split(":")

    const user = fs.readFileSync("./db/users.json")
    const userObj = JSON.parse(user)

    const findUser = userObj.find((user) => user.username === username && user.password === password)
    
if (!findUser) {res.status(404).json({
  message: "Can not find user. Invalid username or password"
})}
  next()  
};

const checkItem = (req, res, next) => {
  const items = [adidas, puma]
  if (items.includes(req.body.name)) {
    return rmSync.status(406).json ({
      error: " This item can not be included"
    })
  }
  next ()
}

module.exports = {checkApiKey, checkRole, basicAuth, checkItem}