import React from 'react'
import { Link } from 'react-router-dom'

const CaseCard = ({issue}) => {
  return (
    <Link className='casecard nav-link' to={`/casedetail/${issue.id}`}>
        <div className='pt-5'>
            <div className='container mb-1'>
                <div className='ärenderuta p-4'>
                    {/* {issue.map(issue => 
                    )}  */}
                    
                    {/* <h4 className='d-flex justify-content-start'>{issue.title}</h4> */}
                    <h5 className='desc d-flex justify-content-start '>{issue.title}</h5>
                    <hr />
                        <p className='d-flex justify-content-start'>{issue.description}</p>
                    <hr className='mt-5' />
                        <p className='d-flex justify-content-start pt-3'><em>{issue.user.email}</em></p>
                    <div className='namnotid d-flex justify-content-between'>
                        <p className='pb-2'>{issue.created.slice(0,19)}</p>
                        <p className='text-warning me-5'>{issue.status.status}</p>
                    </div>
                </div>
            </div>
            {/* {
            comment.map (comment => (
                <div className="note note-info comment mb-3">
                <strong>Note info:</strong> { comment.message }
            </div>
            ))
            } */}
            <hr className='mt-5' />
        </div>
    </Link>
  )
}

export default CaseCard