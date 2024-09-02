import React, { useState } from 'react';
import './signup.css'
import axiosInstance from '../../helpers/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [surname, setsurname] = useState(''); 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Check if the password matches the confirm password
    if (password !== conpassword) {
      setFailure("Passwords do not match.");
      return;
    }

    setLoading(true);
    setFailure(null); // Reset failure message before attempting signup

    try {
      const response = await axiosInstance.post('/usersignup', {
        surname: surname,
        email: email,
        phone: phone,
        password: password
      });

      console.log(response.data); // Log the response data for debugging

      setSuccess(response?.data?.message);
      setLoading(false);

      // Redirect user to home page
      navigate("/");
    } catch (error) {
      setLoading(false);
      setFailure(error.response?.data?.message || "Signup failed: An error occurred.");
    }
  };

  // Loading page
  if (loading) {
    return <p>Loading... please wait.</p>;
  }

  return (
    <section className='form'>
      {success && <div className='success'>{success}</div>}
      {failure && <div className='failure'>{failure}</div>}
      <form onSubmit={handleSignup} className='card shadow p-3 pt-4'>
        <h1>Register User</h1>
        <div className="form-group">
          <input
            type="text"
            id="surname"
            placeholder='Enter surname Name'
            value={surname}
            onChange={(e) => setsurname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder='Enter user Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="phone"
            placeholder='Enter user Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder='Enter user Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmpassword"
            placeholder='Confirm user Password'
            value={conpassword}
            onChange={(e) => setConPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <Link to="/signin">Already have an Account? Login</Link>
      </form>
      {surname}
      <br />
      {email}
      <br />
      {phone}
      <br />
    </section>
  );
}

export default Signup;
