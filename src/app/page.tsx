import Image from 'next/image'
import Link from 'next/link';

interface Ibook {
  id: number,
  name: string,
  type: string,
  available: boolean
  error:string
}
const createTokenUrl = "https://simple-books-api.glitch.me/books"
const getData = async()=>{
try {
  const token = await fetch(createTokenUrl,{
        cache:'no-store'
    });
  if (!token.ok) {
    throw new Error("Failed to Fetch Data");
  }
  return await token.json();
} catch (error: any) {
  return {
    error: error.message,
  };
}
}
export default async  function Home() {
  const books = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {books.map((book:Ibook)=>(
        <div key={book.id}>
          {book.name}
          {book.error}
        </div>
      ))}
    </main>
  )
}
