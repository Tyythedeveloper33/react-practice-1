import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  const handleSubmit = (e)=> {
   e.preventDefault()
   alert('for successfully submitted')

  }

  return (

    <div className="container mt-5">
    <form action={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-white">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label text-white">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type='button' onClick={()=> window.location = "/"} className="btn btn-primary">Back</button>
      <button type="submit" className="btn btn-primary">Submit</button>

    </form>
  </div>

  )
}

export default Login
