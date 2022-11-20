import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
// import CaseDetail from '../components/CaseDetail'
import Navbar from '../components/Navbar'
// import CaseView from './CaseView'
// import axios from 'axios'


const CaseForm = () => {

    const navigate = useNavigate()
    
    const [users, setUsers] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://localhost:7143/api/Users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setUsers(await res.json())
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (userId !== 0) {
            const json = JSON.stringify({ title, description, userId })
            const res = await fetch('https://localhost:7143/api/Issues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            console.log(await res.json())
            setTitle('')
            setDescription('')
            setUserId(0)
            navigate("/caseview")
        }
    }
    //
    


  return (
    <>
    <Navbar/>
    <div className='container'>
        <div className='row m-5'>
            <form className='' onSubmit={handleSubmit}>

                <label className="form-label h5 text-white">Ange Kund</label>
                <select className="form-select" title='kund' onChange={(e) => setUserId(e.target.value)}>
                    <option value={0}>-- Ange en kund --</option>
                    {users.map(user => <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
                </select>

                <div className='col-12'>
                    <label htmlFor="case" className='form-label h5 mt-3 text-white' id='titel'>Titel:</label>
                    <input type="text" placeholder='Skriv din titel här' className='form-control' id="titel" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className='col-12'>
                    <label htmlFor="case" className='form-label h5 mt-3 text-white' id='desc'>Beskrivning:</label>
                    <textarea type="text" className='form-control' id="desc" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-sm btn-success mt-3' type='submit'>Skicka</button>
                </div>
            </form>
        </div>
        {/* <CaseView/> */}
    </div>
    </>
  )
}

export default CaseForm