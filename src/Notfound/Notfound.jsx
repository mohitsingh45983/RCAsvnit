import React from 'react'
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <>
    <div className="container" style={{marginTop:"15vh",marginBottom:"5vh"}}>
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>
              Oops!</h1>
            <h2>
              Page 404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="m-2">
              <Link to={"/"} className='btn btn-outline-danger'>Take home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
};
export default Notfound