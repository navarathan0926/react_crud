import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
 
const Student = () => {
  const [student, setStudent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/')
        .then(res => {
            setStudent(res.data);
        })
        .catch(err => console.log(err));
}, []);

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Fisrtname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
            
          </thead>
          <tbody>
            {
              student.map((data, i)=>(
                <tr key={i}>
                  <td>{data.Firstname}</td>
                  <td>{data.Lastname}</td>
                  <td>{data.Email}</td>
                  <td>
                    <Link to={`/update/${data.ID}`} className="btn btn-primary">Update</Link>
                    <button className="btn btn-danger ms-2">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student