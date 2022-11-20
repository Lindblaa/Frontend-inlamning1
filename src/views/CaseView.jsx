import React, {useCallback, useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'
import CaseCard from '../components/CaseCard'
import Navbar from '../components/Navbar'

const CaseView = () => {

  const [issue, setIssue] = useState([])
  const [url] = useState('https://localhost:7143/api/Issues')
  


  const getIssues = useCallback(async () => {
    const res = await axios.get(url)
    console.log('data')
    // console.log(res.data)
    setIssue(await res.data)
  }, [url])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  console.log(issue)

  return (
    <>
    <Navbar/>
    <div className='pt-5'>
        <div className='container mb-1 case'>
            {
              issue.map(issue => (
                <CaseCard key={issue.id}  issue={issue}/>
              ))
            }
        </div>
        {/* <Comment/> */}
        <hr className='mt-5' />
    </div>
    </>
  )
}

export default CaseView