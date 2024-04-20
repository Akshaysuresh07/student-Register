import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerApi } from '../../Services/allApi';



function Register() {
    const navigate =useNavigate()
    const[studentData,setStudentData]=useState({
        firstName:"",lastName:"",address:"",email:"",gender:"",mobile:"",password:"",dob:"",course:""
    })
console.log(studentData);

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(studentData.firstName && studentData.lastName && studentData.address && studentData.email && studentData.mobile && studentData.password && studentData.dob && studentData.course){
           try {
            const result=await registerApi(studentData)
            console.log(result)
            if(result.status===200){
                toast.success('Student Registered Successfully')
                setStudentData({
                    firstName:"",lastName:"",address:"",email:"",password:"",mobile:"",dob:"",course:""
                })
                setTimeout(()=>{
                    navigate('/details')
                
                },2000)
                
            }
            else{
                toast.warning('Student Registration Failed')
            }
        }
            catch(err){
                toast.error('Student Registration Failed')
            }
        }

    }
    const handleCancel = () => {
    setStudentData({
        firstName:"",lastName:"",address:"",email:"",password:"",mobile:"",dob:"",course:""
    })

    }
    return (
        <>
            <div className='container -fluid' style={{ height: '100%' }}>
                <div id='regcon' className='shadow  mt-5' style={{ height: '90%' }}>
                    <h1 className='text-center fw-bold text-info'>Students registration</h1>

                    <div className='row'>
                        <div className='col-lg-5 ms-3'>
                            <Form>
                                <Form.Group className="mb-3  " controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control value={studentData.firstName} onChange={e=>setStudentData({...studentData,firstName:e.target.value})} type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control value={studentData.lastName} onChange={e=>setStudentData({...studentData,lastName:e.target.value})}  type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control value={studentData.address} onChange={e=>setStudentData({...studentData,address:e.target.value})} as="textarea" placeholder='Address' rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control value={studentData.email} onChange={e=>setStudentData({...studentData,email:e.target.value})} type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Select value={studentData.gender} onChange={e=>setStudentData({...studentData,gender:e.target.value})}  aria-label="Default select example">
                                    <option>--Select Gender--</option>
                                    <option  value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </Form.Select>
                            </Form>

                        </div>
                        <div className='col-lg-5'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control value={studentData.mobile} onChange={e=>setStudentData({...studentData,mobile:e.target.value})} type="text" placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                    <Form.Control
                                    value={studentData.password} onChange={e=>setStudentData({...studentData,password:e.target.value})}
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                </Form.Group>

                                
                            </Form>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input value={studentData.dob} onChange={e=>setStudentData({...studentData,dob:e.target.value})} type="date" className='form-control' />
                            </div>
                            <div className='mt-3'>
                                <Form>
                                    <Form.Select value={studentData.course} onChange={e=>setStudentData({...studentData,course:e.target.value})} aria-label="Default select example">
                                        <option>--Select Course--</option>
                                        <option value="Biology">Biology</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="commerce">Commerce</option>
                                        <option value="Humanities"> Humanities</option>

                                    </Form.Select>

                                </Form>
                            </div>

                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <button onClick={handleSubmit} className='btn btn-primary shadow mb-3 me-4 p-2 rounded'>Register</button>
                        <button onClick={handleCancel}  className='btn btn-danger shadow mb-3 p-2 rounded'>Cancel</button>

                        </div>

                </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </>

    )
}

export default Register