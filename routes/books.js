var books_array=[
    {
        "bookTitle":"Recursion",
        "author":"Blake Crouch",
        "genre":"Thriller",
        "description":"That’s what New York City cop Barry Sutton is learning as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.",
        "price":150,
        "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/81E0o11MkdL.jpg"
    },
    {
        "bookTitle":"The Darwin Affair",
        "author":"Megan Miranda",
        "genre":"Thriller",
        "description":"That’s what New York City cop Barry Sutton is learning as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.",
        "price":200,
        "urlToImage":"https://images-na.ssl-images-amazon.com/images/I/81E0o11MkdL.jpg"
    }

]



var exp = require('express');
const router = exp.Router();

router.get("/",(req,res)=>{
    res.render('index',{books_array:books_array})
})

module.exports = router;
