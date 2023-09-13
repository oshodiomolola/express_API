const fs = require('fs');

function createUser(req, res) {
  const users = fs.readFileSync("./db/users.json")
  const userObj = JSON.parse(users)

  const newUser = req.body

  newUser.api_key = `${newUser.username}_${newUser.password}`

  if(newUser.username === "lola") {
    newUser.role = "admin"
  } else newUser.role = "customer"

  userObj.push(newUser)

  fs.writeFile("./db/users.json", JSON.stringify(userObj), (err) => {
    if(err) {
      res.status(500).json({
       message: "Internal server error"
      })
    } 
    res.status(200).json(newUser)
  })
}



module.exports = {createUser}