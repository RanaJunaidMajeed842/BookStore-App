type book ={
    title : string
    author : string
    price : number 
}
type order = {
    status : "InProcess" | "Deleiverd"
    Book : book 
}
let bookLists : book[] = []
let orderQuue : order[] = []
let completeOrders : order[] = []

function addNewBook (Book : book) : book {
    bookLists.push(Book)
    return Book 
}
function orderBook(title : string) : order | undefined {
    const selectedBook = bookLists.find(book => book.title === title)
    if(!selectedBook){
        console.log(`${title} is not available`)
        return
    }
    const newOrder : order = {
        status : "InProcess",
        Book : selectedBook
    }
    orderQuue.push(newOrder)
    return newOrder
}
function orderCompleted  (title:string) : order | undefined {
    const selectedBook = bookLists.find(book => book.title === title)
    if(!selectedBook){
        console.log("Book is not ordered Yet");
        return
    }
    const orderComplete : order = {
        status : "Deleiverd",
        Book : selectedBook
    } 
    completeOrders.push(orderComplete)
}


function testing(){
    console.log("BookList: " + bookLists)
    console.log("Ordered Queues: " + bookLists)
    console.log("Complete Orders: " + bookLists)


    addNewBook({title:"Book1", author:"Someone1" , price : 300});
    addNewBook({title:"Book2", author:"Someone2" , price : 200});
    addNewBook({title:"Book3", author:"Someone3" , price : 100});
    addNewBook({title:"Book4", author:"Someone4" , price : 330});
    addNewBook({title:"Book5", author:"Someone5" , price : 320});

    orderBook("Book2")
    orderBook("Book4")
    orderBook("Book1")

    orderCompleted("Book2")
    orderCompleted("Book4")
    orderCompleted("Book1")

    console.log("BookList: " + JSON.stringify(bookLists))
    console.log("Ordered Queues: " + JSON.stringify(orderQuue))
    console.log("Complete Orders: " + JSON.stringify(completeOrders))

}

testing();

