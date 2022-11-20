import React from 'react'
import { NavLink } from 'react-router-dom'

const BubbleMenu = () => {
  return (
<div>
    <div className='bubble-row row justify-content-around d-none d-sm-flex mt-5 pt-5'>
        <div className='heladiven col-2'>
        <NavLink to='/create'><div className='bubble-div '>
            <p>Skapa ärende</p>
            </div></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/caseview'><div className='bubble-div'>
            <p>Se alla ärenden</p>
            </div></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/register'><div className='bubble-div '>
           <p>Registrera</p>
            </div></NavLink>
        </div>
    </div>
</div>
  )
}

export default BubbleMenu