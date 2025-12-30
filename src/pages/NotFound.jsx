import React from "react";

export default function NotFound({ onLoad }) {
  React.useEffect(() => {
    onLoad?.();
  }, []);


  const handleGoHome = () => {
    // 1️⃣ Clear route cache (sessionStorage)
    sessionStorage.clear();

    // 2️⃣ Optional: clear other caches if you ever add them
    // localStorage.clear();

    // 3️⃣ Force hard reload to Home
    window.location.href = "/";
    // OR (more aggressive)
    // window.location.replace("/");
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-4">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h3 className="mb-3">Page Not Found</h3>
        <p className="text-muted mb-4">Sorry, the page you are looking for does not exist or has been moved.</p>

        <div className="text-center mt-5">
          <button
            className="modern-btn px-4 py-2 fw-bold"
            onClick={handleGoHome}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
