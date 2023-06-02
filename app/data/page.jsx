
"use client"
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }
   
export default async function Page(){
 const data = await getData();
 console.log(data)

 return(
    <main>
        <h1>helüüüü</h1>
        <h2>{data.id}</h2>
        
    </main>
 )
}
