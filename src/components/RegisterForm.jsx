import React, {useState} from 'react'
import Navbar from './Navbar'

const RegisterForm = () => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')


  const handleSubmit = async (e) => {
      e.preventDefault()
      
      const json = JSON.stringify({firstName, lastName, email})

      const res = await fetch('https://localhost:7143/api/users/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: json
      })
      console.log(await res.JSON())
      setFirstName('')
      setLastName('')
      setEmail('')
      console.log('Register completed!')
  }


  return (
    <>
    <Navbar/>
    <div className='container card py-5 rounded-7 shadow p-3 mb-5 mt-5 bg-body rounded'>
      <h2  className='text-center mb-4'>Registrera dig</h2>
      <form onSubmit={handleSubmit}  className='pe-5 ps-5 d-flex justify-content-center'>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-4 pe-lg-2" >
            <input type="text" id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}  className='form-control' placeholder='Förnamn:'/>
          </div> 
          <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2" >       
            <input type="text" id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}  className='form-control' placeholder='Efternamn:' />
          </div>
          <div className="col-12 mb-4">
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}  className='form-control' placeholder='Epost:' />
          </div>
       {/* <   <div className="col-lg-12 col-sm-12 mb-4 pe-lg-2">
            <input type="password" id='password' name='password' className='form-control' placeholder='Lösenord:' />
          </div>> */}
          {/* <div className="col-lg-6 col-sm-12 mb-4 ps-lg-2">
            <input type="password" id='repeatPassword' name='repeatPassword' className='form-control' placeholder='Upprepa Lösenordet:' />
          </div> */}
       
          <div>
           <button type='submit' className='mb-4 btn btn-block btn-dark'>Registrera</button>
          </div>
          </div>
        </form>

        {/* {
          statuses.map (status => (
            <Statuses key={status.id} status={status}/> 
          ))
        } */}
    </div>
    </>
  )
}

export default RegisterForm