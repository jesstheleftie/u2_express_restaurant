const express = require("express");
const app = express();
const cors = require("cors");
const appetizersController = require("./controllers/AppetizersController.js")
const PORT = process.env.PORT || 3008;



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to my page!");
  });

//Route for Appetizers

app.get("/appetizers", appetizersController.getAppetizers)

//Route for Entrees

app.get("/entrees", (req,res)=>{
    res.send([
        { name: 'Truffle Pasta', price: 24.99, vegan: false, glutenFree: false, imageUrl: 'https://media.istockphoto.com/id/155152730/photo/creamy-pasta-with-shaved-truffles.jpg?s=1024x1024&w=is&k=20&c=spISoSWBIGoVGDIoQn9PUzA4OGhX8hm7f-uF4UjjiXE=' },
        { name: 'Grilled Cod', price: 20.99, vegan: false, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1281749727/photo/fried-cod-fillet-with-fried-potatoes-and-fresh-vegetables.jpg?s=1024x1024&w=is&k=20&c=EVn8HoyOwR-xHpCkXT_XDcU52q72EGh-qtTfTV0O1f4=' },
        { name: 'Vegan Burger', price: 18.50, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1416033500/photo/tasty-hamburger-on-a-dark-background.jpg?s=1024x1024&w=is&k=20&c=uZksXBT3hjHDzLSaF5BdRM5vC-NludEX0TSlWSnbqxk=' },  
    ])
})

//Route for Desserts
app.get("/desserts", (req,res)=>{
    res.send([
        { name: 'Lava Cake', price: 7.99, vegan: false, glutenFree: false, imageUrl: 'https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=1024x1024&w=is&k=20&c=_QmqhSe_oFa2H0t1EiTfHOa2EmHGDZClDR_MWrYTgHw=' },
        { name: 'Tiramisu', price: 7.99, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/517368976/photo/slice-of-dessert.jpg?s=1024x1024&w=is&k=20&c=U5Mbluzt1xvB1Yo5iVokxizOeDTgDzthHkZ8M9bQFBw=' },
        { name: 'Vegan Sorbet', price: 6.50, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1153196635/photo/homemade-apricot-or-peach-ice-cream-sorbet-with-and-mint-leaves-closeup.jpg?s=1024x1024&w=is&k=20&c=7zW7QK0YTqrFsrZ3_4PcXIU2J_0DrdCb4x7zsu5ys8w=' },  
    ])
})


//Catch Errors
app.get('/*',(req,res)=>{
    res.send("404 - File not found")
})

