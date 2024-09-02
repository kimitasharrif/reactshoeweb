import React, { useState } from 'react';
import './signin.css';
import axiosInstance from '../../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [phone, setphone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate()

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);

   
    axiosInstance.post('/usersignin', {
        phone: phone,
        password: password,
      })
      .then((response)=>{
      // setSuccess(response?.data?.message);
      // console.log(response.data)
      // setFailure(null);
      setLoading(false)
      // handle the response 
      if(response?.data && response?.data?.access_token && response?.data?.user){
        // alert("Login successiful")
        // save data to local storage 
        localStorage.setItem("user_id",response?.data?.user?.user_id)
        localStorage.setItem("email",response?.data?.user?.email)
        localStorage.setItem("surname",response?.data?.user?.surname)
        localStorage.setItem("phone",response?.data?.user?.phone)
        localStorage.setItem("access_token",response?.data?.access_token)
        localStorage.setItem("reg_date",response?.data?.user?.reg_date)

        


        // redirect to home page 
        navigate("/")



        
      }else{
        // LOGIN FAILED 
        setFailure("Login Failed")
      }
         

      })
      . catch ((error)=> {
      setFailure(error.message);
      setSuccess(null);
    })
  }
  if (loading) {
    return <p>Loading...... please wait.</p>;
  }

  return (
    <section className='form'>
      {success && <div className='success'>{success}</div>}
      {failure && <div className='failure'>{failure}</div>}

      
      <form onSubmit={handleSignin} className='card shadow p-3 pt-4'>
        <h1>USER LOGIN</h1>
        <div className="form-group">
          <input
            type="phone"
            id="phone"
            placeholder='Enter user phone'
            className="form-control"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder='Enter user password'
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <Link to="/signup">Don't have an Account? Create one</Link>
      </form>

    
    </section>
  );
};

export default Signin;





