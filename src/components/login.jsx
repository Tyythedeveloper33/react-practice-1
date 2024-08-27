import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  return (

    <div className="container mt-5">
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

  )
}

export default Login
