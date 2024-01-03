import React from 'react'

interface Iprops {
    params:{
        id:string
    }
}
const url = "https://simple-books-api.glitch.me"
interface Ibook {
    name:string,
    id:number,
    author:string,
    type:string,
    price:number,
    'current-stock':number,
    available:boolean
}

const page = async  ({params}:Iprops) => {
    const response = await fetch(`${url}/books/${params.id}`,{
        cache:"force-cache"
    })
    const book:Ibook = await response.json()
    return (
        <div>
            <h2>Book id is {params.id}</h2>
            <h2>Book name is {book.name}</h2>
            <h2>Book author is {book.author}</h2>
        </div>
    )
}

export default page