const desserts = [
    { name: 'Lava Cake', price: 7.99, vegan: false, glutenFree: false, imageUrl: 'https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=1024x1024&w=is&k=20&c=_QmqhSe_oFa2H0t1EiTfHOa2EmHGDZClDR_MWrYTgHw=' },
    { name: 'Tiramisu', price: 7.99, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/517368976/photo/slice-of-dessert.jpg?s=1024x1024&w=is&k=20&c=U5Mbluzt1xvB1Yo5iVokxizOeDTgDzthHkZ8M9bQFBw=' },
    { name: 'Vegan Sorbet', price: 6.50, vegan: true, glutenFree: true, imageUrl: 'https://media.istockphoto.com/id/1153196635/photo/homemade-apricot-or-peach-ice-cream-sorbet-with-and-mint-leaves-closeup.jpg?s=1024x1024&w=is&k=20&c=7zW7QK0YTqrFsrZ3_4PcXIU2J_0DrdCb4x7zsu5ys8w=' },  
]

const getDesserts = (req,res) =>{
    res.send(desserts)
}

const getDessert =(req,res)=>{
    res.send(desserts[req.params.id])
}

module.exports ={
    getDesserts,
    getDessert
}