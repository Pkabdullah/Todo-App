'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const Home = () => {
  const [Todo, setTodo] = useState([{ Grocery: "Sugar", id: 1 }, { Grocery: "Tea", id: 2 }])

  const [inputValue, setinputValue] = useState("")

  const [id, setid] = useState(0)

  // function for add 

  const additems =()=> {
    let obj:any = Todo.find(item => item.id == id)
    if (obj){
      let newarray = Todo.filter(item => item.id !== obj.id)
      setTodo([...newarray,{ Grocery: inputValue, id: id }])
      setinputValue("")
      setid(0)
     return 
    }
    setTodo([...Todo,{ Grocery: inputValue, id: id }])
    setinputValue("")
    setid(0)
    }
  
  const edititems = (id: any) => {
    let obj: any = Todo.find(item => item.id == id)
    setinputValue(obj.Grocery)
    setid(obj.id)
    console.log(obj)
  
  }

  const delitem=(id:any)=>{
    let newarray = Todo.filter((item) => item.id !== id)
    setTodo([...newarray])
  }

  return (
    <div className='max-w-4xl mx-auto p-5 '>
      <h1 className='text-center text-[40px] font-bold font-mono'>Todo App</h1>

      {/* input */}
      <div className='flex justify-between gap-4 mt-10'>
        
        {/* e stand for event */}
        <Input placeholder='search' value={inputValue} onChange={(e) => {
          setinputValue(e.target.value)
        }} />
        <Input placeholder='Id' value={id} type='number' onChange={(e: any) => {
          setid(e.target.value)
        }} />
        <Button onClick={additems}>Add</Button>
      </div>
      <h1 className='text-center text-[30px] font-bold font-mono mt-10'>Grocery Listing</h1>

      <div className="grid grid-cols-2 gap-x-16 mt-14">
        {
          Todo.map((item: any, i: any) => {
            return (

              <div className='bg-blue-300 p-5 mt-10' key={i} >
              {/*   items */}
                <div className=''>
                  <div className='flex justify-between '>
                    <span className='font-bold text-lg'>{i + 1}</span>
                    <span onClick={()=>delitem(item.id)} className='font-bold text-lg cursor-pointer '>X</span>
                  </div>
                  <div><h1 className='mt-5'>{item.Grocery}</h1></div>
                  <div><h1 onClick={() => edititems(item.id)} className='text-right cursor-pointer'>Edit</h1></div>

                </div>
              </div>
            )

          })
        }
      </div>
    </div>

  )
}

export default Home