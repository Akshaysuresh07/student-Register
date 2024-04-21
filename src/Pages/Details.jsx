import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { displayUsersApi } from '../../Services/allApi'

function Details() {

  const [dUser,setDUser]=useState([])

  const getStudentDetails=async()=>{
    const result=await displayUsersApi()
    console.log(result)
    if(result.status===200){
      setDUser(result.data)
    }
  }
  useEffect(()=>{
    getStudentDetails()
  },[])

  return (
  <>
  <Header/>
  <div className='conatiner-fluid mt-5'>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Address</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Gender</th>
      <th>Dob</th>
      <th>Course</th>
    </tr>
  </thead>
  <tbody>
    {dUser? dUser.map((user,index)=>(
      <tr key={user}>
      <td>{index+1}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.address}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.gender}</td>
        <td>{user.dob}</td>
        <td>{user.course}</td>
    </tr>

    ))
    :
    <div>  
    <p className='text-center text-danger'>no records added...</p>no
    </div>
      
 }
    
  
  </tbody>
</Table>
  
  
  </div>




  
  </>
  )
}

export default Details