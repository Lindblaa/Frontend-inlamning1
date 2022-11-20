import React from 'react'
import '../App.css'
import Comment from './Comment'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'


const CaseDetail = () => {
  
  const { id } = useParams()

  const navigate = useNavigate()

  const [issue, setIssue] = useState()
  const [comments, setComments] = useState([])
  const [issueId, setIssueId] = useState(0)
  const [userId, setUserId] = useState(0)


  const getIssue = async (_id) => {
    const res = await axios.get('https://localhost:7143/api/issues/' + _id)
    setIssue(res.data)
    setUserId(res.data.user.id)
    setIssueId(res.data.id)
    setComments(res.data.comments)
    }

  useEffect(() => {
    getIssue(id)
  }, [id])



  //UPPDATERA STATUS
   const changeStatus = (e) => {
    e.preventDefault()
    updateIssue(Number(e.target.value))
  }

  const updateIssue = async value => {
    console.log(value)
    const res = await axios.put('https://localhost:7143/api/issues/' + id, { statusId: value })
    console.log(res.data)
    setIssue(state => ({
      ...state,
      statusId: res.data.statusId
    }))
    getIssue(id)
  }
  
  

  //LÄGG TILL NY KOMMENTAR
  const [message, setMessage] = useState()

  const onChange = (e) => {
    setMessage(e.target.value)
  }
  
   const addComment = async (e) => {
       e.preventDefault()
       
       setIssueId(issue.id)
       setUserId(issue.user.id)
      //  setComment()
      //  console.log(comment)
          const json = JSON.stringify({ message, issueId, userId })
          console.log(json)
          
          const res = await fetch('https://localhost:7143/api/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: json
          })
          console.log(await res.json())
          getIssue(id)
          setMessage('')
        }


    
  //TA BORT KOMMENTAR
  const [commentId, setCommentId] = useState()

  const deleteComment = async (_comment) => {
    // e.preventDefault()
    
      setCommentId(comments.id)
      console.log(commentId)
           
      const res = await axios.delete('https://localhost:7143/api/comments/' + _comment)
      console.log(res.data)
      
      const _comments = comments.filter(comments => comments.id !== _comment)
      setComments(_comments)
      console.log(_comments)
      console.log(comments)
    }

       

  return (
    <>
    <Navbar/>
    {
      issue &&
      <div className='pt-5 container'>
        <i className="fa-solid fa-arrow-left fs-4" onClick={() => navigate("/caseview")} type='submit'></i>
      <div className='pt-5 casecard'>
            <div className='container mb-1'>
                    {/* <div style={textColor}><p className='d-flex justify-content-center h5 text-uppercase'>{issue.status.status}</p></div> */}
                    <p className='d-flex text-warning justify-content-center h5 text-uppercase'>{issue.status.status}</p>
                    <hr className='text-dark' />
                <div className='ärenderuta p-4'>
                    <h5 className='desc d-flex justify-content-start '>{issue.title}</h5>
                    <hr />
                        <p className='d-flex justify-content-start'>{issue.description}</p>
                    <hr className='mt-5'/>
                      <div className='d-flex align-items-center justify-content-between'>
                        <p className='justify-content-start'><em>{issue.user.firstName} {issue.user.lastName}</em></p>
                        <p className='justify-content-end pe-5'><em>{issue.user.email}</em></p>
                        </div>
                    <div className='namnotid d-flex justify-content-between'>
                        <p className='pb-2 text-warning'>{issue.created.slice(0,19)}</p>
                        <select className='form-select w-auto text-white bg-dark' name="status" id="" value={issue.statusId} onChange={changeStatus}>
                          <option value="0">Ändra status</option>
                          <option className='yellow' value="1">Ej påbörjad</option>
                          <option className='green' value="2" type='submit'>Påbörjad</option>
                          <option className='red' value="3">Avslutad</option>
                        </select>
                    </div>
                </div>
            </div>
            {comments && comments.map(comments => <Comment key={comments.id} comments={comments} deleteComment={deleteComment}/>)}
            <hr className='mt-5' />
            {/* <CommentForm key={issue}/> */}
            <div>
              <form className='container row' >
                  <label className='h6'>Lägg till kommentar</label>
                  <textarea className=' note note-warning' placeholder='Skriv din kommentar här' name='message' value={message} onChange={onChange}></textarea>
                  <button type='submit' className='btn mt-2' onClick={addComment}>Lägg till</button>
              </form>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default CaseDetail