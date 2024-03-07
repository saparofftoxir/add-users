import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import CardUser from '../components/CardUser';
function Main() {
    const [name, setName] = useState("")
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const addUserHandler = (e) => {
        e.preventDefault()
        let newUser = {
            name: name,
            id: nanoid()
        }
        setUsers([...users, newUser])
        e.target.reset()
    }
    const deleteUser = (id) => {
        let filtered = users.filter(element => element.id !== id)
        setUsers(filtered)
    }
 
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])
    return (
        <div className='w-[400px] min-h-40 border rounded px-5 mt-16 m-auto bg-gray-100'>
            <form onSubmit={addUserHandler} className='w-full mt-10 flex flex-col gap-4' action="">
                <div className='w-full rounded bg-gray-50  items-center justify-center border-2  flex gap-3'>
                    <button>
                        <BiMenuAltLeft className='w-7 h-7' />
                    </button>
                    <input required onChange={(e) => setName(e.target.value)} className='w-full p-2 outline-none bg-gray-50 ' type="text" placeholder='Add a new user' />
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex justify-center gap-3'>
                        <button className='text-blue-600  underline'>All</button>
                        <button>Panding</button>
                        <button>Completed</button>
                    </div>
                    <div>
                        <button className='p-1 text-white bg-blue-600 hover:bg-blue-500 rounded w-20'>Clear</button>
                    </div>
                </div>
                <hr className='w-full text-2xl' />
            </form>
            <div className='w-full flex flex-col gap-4'>
                {users.map(item => <CardUser deleteUser={deleteUser} key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default Main;