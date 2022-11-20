import React from 'react'


const Comment = ({comments, deleteComment}) => {


  return (
    <div className='mb-4 container'>
      <div className=''>
        <div className="note note-danger comment text-dark mb-1">
          <div className=' d-flex justify-content-between mb-2'>
            <strong className='text-danger'>Kommentar:</strong>
            <span className='text-danger'>{comments.created.slice(0,19)}</span>
            <div className='d-flex align-items-center justify-content-end'>
            <button className='btn-dark text-danger rounded' onClick={() => deleteComment(comments.id)}>X</button>
          </div>
          </div>
        <div className=' d-flex justify-content-between'>
          <p className='text-dark'>{ comments.message }</p>
        </div>
        </div>
      </div>
    </div>  
  )
}

export default Comment