import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-4">
        <h1 className="display-4 fw-bold text-warning">Oops!</h1>
        <h4 className="mb-3">Something went wrong</h4>
        <p className="text-muted mb-4">
          An unexpected error occurred. Please try again later.
        </p>

        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">
            <Link to="/" style={{color:"#fff"}}>
              Go Back Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
