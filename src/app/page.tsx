"use client"
import Image from 'next/image'
import Link from 'next/link';
import useSwr from "swr"

interface Ibook {
  id: number,
  name: string,
  type: string,
  available: boolean
  error:string
}
const Url = "https://api.quotable.io/random?tags=technology"

const fetcher = (Url:any)=> fetch(Url).then((res:any)=>res.json())


export default function Page(){
  const {data,error,isLoading} = useSwr(Url,fetcher)
  if(error) return <div>failed to load</div>
  if(isLoading) return <div>Loading</div>
  return(
    <div className='h-10 bg-slate-300'>{data.content}</div>
  )
}


// const getData = async()=>{
// try {
//   const token = await fetch(createTokenUrl,{
//         cache:'no-store'
//     });
//   if (!token.ok) {
//     throw new Error("Failed to Fetch Data");
//   }
//   return await token.json();
// } catch (error: any) {
//   return {
//     error: error.message,
//   };
// }
// }
// export default async  function Home() {
//   const books = await getData()
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {books.map((book:Ibook)=>(
//         <div key={book.id}>
//           {book.name}
//           {book.error}
//         </div>
//       ))}
//     </main>
//   )
// }
