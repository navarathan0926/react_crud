import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function UpdateStudent() {
    const [firstname, setFName] = useState('')
    const [lastname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:3000/update'+id , {firstname, lastname, email})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">FirstName</label>
                    <input type="text" placeholder='Enter Fisrt Name' className='form-control' 
                    onChange={e => setFName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">LastName</label>
                    <input type="text" placeholder='Enter Last Name' className='form-control'
                    onChange={e => setLName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control'
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>

    </div>
  )
}

export default UpdateStudent