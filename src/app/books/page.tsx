
import Link from 'next/link'
import React from 'react'

const url = "https://simple-books-api.glitch.me"
interface Ibook {
    name:string,
    id:number,
    available:boolean,
    type:string,
}
const BooksPage = async () => {
    const response = await fetch(`${url}/books`,{
        cache:"force-cache"
    })
    const book:Ibook[] = await response.json()
    console.log(book)
    return (
        <div>
            <p>BooksPage</p>
            {
                book.map((book)=>(
                    <Link key={book.id} href={`/books/${book.id}`}>
                    <div key={book.id}>
                        <h2>{book.name}</h2>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default BooksPage