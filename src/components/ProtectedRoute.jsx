import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const VERIFY_URL =
  "https://vantage-backend-1fn9.onrender.com/api/auth/verify";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const controller = new AbortController();

    async function verifyAdmin() {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        setStatus("unauthorized");
        return;
      }

      try {
        const response = await fetch(VERIFY_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          setStatus("unauthorized");
          return;
        }

        setStatus("authorized");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      }
    }

    verifyAdmin();

    return () => controller.abort();
  }, []);

  if (status === "checking") {
    return <p>Verifying administrator access...</p>;
  }

  if (status === "error") {
    return (
      <p>
        Unable to verify administrator access.
        Please refresh and try again.
      </p>
    );
  }

  if (status === "unauthorized") {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default ProtectedRoute;