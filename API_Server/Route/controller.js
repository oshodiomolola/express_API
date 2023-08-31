const fs = require('fs');


function getAllItems(req, res) {
  const items = fs.readFileSync("./db/items.json")
  res.status(200).send(items)
}

function getOneItem(req, res) {
 const id = parseInt(req.params.id)
 const items = fs.readFileSync("./db/items.json")
 const itemsObj = JSON.parse(items)

 const item = itemsObj.find(item => item.id === id)
 console.log(item)
  if(!item) {
    res.status(404).json({
      message: "Item not found!"
    })
  }
  res.status(200).json(item)
}

function createItem(req, res) {
 const newItem = req.body
 const items = fs.readFileSync("./db/items.json")
 const itemsObj = JSON.parse(items)

 const lastId = itemsObj[itemsObj.length - 1].id
 const newId = lastId + 1

 const createdItem = {...newItem, id: newId}
itemsObj.push(createdItem)

fs.writeFile("./db/items.json", JSON.stringify(itemsObj), (err) => {
  if(err) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
  res.status(200).json(createdItem)
})
}

function updateItems(req, res) {
const id = req.params.id
const items = fs.readFileSync("./db/items.json")
const itemsObj = JSON.parse(items)
const updateItem = req.body

const findItemIndex = itemsObj.findIndex(item => item.id === parseInt(id))
console.log(findItemIndex)
if(findItemIndex === - 1) {
  res.status(404).json({
    message: "Item not found!"
  })
}
itemsObj[findItemIndex] = {...itemsObj[findItemIndex], ...updateItem}
fs.writeFile("./db/items.json", JSON.stringify(itemsObj), (err) => {
  if(err) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
  res.status(200).json(updateItem)
})
}

function deleteItem(req, res) {
const id = req.params.id
const items = fs.readFileSync('./db/items.json')
const itemsObj = JSON.parse(items)

const findItemindex = itemsObj.findIndex(item => item === parseInt(id))
console.log(findItemindex)

itemsObj.splice(findItemindex, 1)
fs.writeFile("./db/items.json", JSON.stringify(itemsObj), (err) => {
  if(err){
    res.status(404).json({
      message: "Item not deleted!"
    })
  }
  res.status(200).json({
    message: "Item deleted successfully"
  })
})
}

 module.exports = {getAllItems, getOneItem, createItem, updateItems, deleteItem}