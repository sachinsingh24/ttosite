import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-4">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h3 className="mb-3">Page Not Found</h3>
        <p className="text-muted mb-4">Sorry, the page you are looking for does not exist or has been moved.</p>

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
