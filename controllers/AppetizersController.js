const appetizers = [
    { name: 'Calimari', price: 15.99, vegan: false, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1474364046/photo/salt-and-pepper-calamari.jpg?s=1024x1024&w=is&k=20&c=b6Trko58Db2VYOd9WKBlGDXQGOgnpCNkZp4uNYYhhfQ=' },
    { name: 'Garlic Bread', price: 4.50, vegan: false, glutenFree: false, imageUrl: 'https://media.istockphoto.com/id/1181825866/photo/garlic-bread-on-rustic-wooden-table.jpg?s=1024x1024&w=is&k=20&c=BRLii6tRtvkzRbwYFeDSCCtULDxQwRwpHBwx7nPFIak=' },
    { name: 'Stuffed Mushrooms', price: 6.25, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1358549200/photo/baked-mushroom-caps-stuffed-with-chicken-meat.jpg?s=1024x1024&w=is&k=20&c=71VD9q4-E_ma7YPHnw088btBBcCFdAJlwMo71rhHRKo=' },
];

const getAppetizers = (req, res) =>{
    res.send(appetizers)
}

const getAppetizer = (req,res) =>{
    res.send(appetizers[req.params.id])
}

module.exports={
    getAppetizers,
    getAppetizer
}