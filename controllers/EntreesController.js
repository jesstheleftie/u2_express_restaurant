const entrees = [
    { name: 'Truffle Pasta', price: 24.99, vegan: false, glutenFree: false, imageUrl: 'https://media.istockphoto.com/id/155152730/photo/creamy-pasta-with-shaved-truffles.jpg?s=1024x1024&w=is&k=20&c=spISoSWBIGoVGDIoQn9PUzA4OGhX8hm7f-uF4UjjiXE=' },
    { name: 'Grilled Cod', price: 20.99, vegan: false, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1281749727/photo/fried-cod-fillet-with-fried-potatoes-and-fresh-vegetables.jpg?s=1024x1024&w=is&k=20&c=EVn8HoyOwR-xHpCkXT_XDcU52q72EGh-qtTfTV0O1f4=' },
    { name: 'Vegan Burger', price: 18.50, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1416033500/photo/tasty-hamburger-on-a-dark-background.jpg?s=1024x1024&w=is&k=20&c=uZksXBT3hjHDzLSaF5BdRM5vC-NludEX0TSlWSnbqxk=' },  
];

const getEntrees = (req,res) =>{
    res.send(entrees)
}

const getEntree =(req,res)=>{
    res.send(entrees[req.params.id])
}

module.exports={
    getEntrees,
    getEntree
}