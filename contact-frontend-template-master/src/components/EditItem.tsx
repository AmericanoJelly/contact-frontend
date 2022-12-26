import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props{
  
}

function EditItem({title, value}:{title:string, value?:string}) {

  return (
    <div className='editItem'>
        <label htmlFor={`editItem-${title}`}>
            {title}
        </label>
        <input title={`editItem-${title}`}  defaultValue={value} />
    </div>
  )
}

export default EditItem