const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to my page!");
  });

//Route for Appetizers

app.get("/appetizers", (req, res) => {
    res.send([
        { name: 'Calimari', price: 15.99, vegan: false, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1474364046/photo/salt-and-pepper-calamari.jpg?s=1024x1024&w=is&k=20&c=b6Trko58Db2VYOd9WKBlGDXQGOgnpCNkZp4uNYYhhfQ=' },
        { name: 'Garlic Bread', price: 4.50, vegan: false, glutenFree: false, imageUrl: 'https://media.istockphoto.com/id/1181825866/photo/garlic-bread-on-rustic-wooden-table.jpg?s=1024x1024&w=is&k=20&c=BRLii6tRtvkzRbwYFeDSCCtULDxQwRwpHBwx7nPFIak=' },
        { name: 'Stuffed Mushrooms', price: 6.25, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1358549200/photo/baked-mushroom-caps-stuffed-with-chicken-meat.jpg?s=1024x1024&w=is&k=20&c=71VD9q4-E_ma7YPHnw088btBBcCFdAJlwMo71rhHRKo=' },
    ])
})

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

