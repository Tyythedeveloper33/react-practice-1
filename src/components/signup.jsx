import React from 'react';
 // Import your custom CSS file
 import 'bootstrap/dist/css/bootstrap.min.css';
const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form successfully submitted');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="username" className="form-label text-white">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
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
        <div className="mb-3">
          <label htmlFor="passwordConfirm" className="form-label text-white">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            placeholder="Confirm Password"
          />
        </div>
        <button type='button' onClick={() => window.location = "/"} className="btn btn-primary">Back</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
