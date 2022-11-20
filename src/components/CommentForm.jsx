import React, { useState} from 'react'
import { useParams } from 'react-router-dom'

const CommentForm = () => {
    
  //LÄGG TILL NY KOMMENTAR
    const {issueId, userId} = useParams()  
    const [comment, setComment] = useState('')
    

    const addComment = async (e) => {
        e.preventDefault()
        
        if (issueId !== 0) {
            const json = JSON.stringify({ comment, issueId, userId })
            console.log(json)

            const res = await fetch('https://localhost:7143/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            console.log(await res.json())
            setComment('')
        }
    }
    console.log(userId)
  


  return (
    <div>
        <form className='container row'>
            <label className='h6'>Lägg till kommentar</label>
            <textarea className=' note note-warning' placeholder='Skriv din kommentar här' name='message' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <button className='btn mt-2' onChange={addComment} >Lägg till</button>
        </form>
    </div>
  )
}

export default CommentForm