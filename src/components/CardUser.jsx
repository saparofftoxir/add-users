import React, { useState } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
function CardUser({ item,deleteUser}) {
    return (
        <div className='flex justify-between items-center w-full p-3 border-b-2'>
            <input  type="checkbox" />
            <h2 >  {item.name}</h2>
            <button onClick={()=>deleteUser(item.id)}>
                <MdOutlineDeleteOutline className='w-5 h-5' />
            </button>

        </div>
    )
}

export default CardUser;