import { useEffect } from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoggedIn } = useAuth();
  // console.log("user", isAuthenticated);

  //2.Show a spinner

  //3. If there is np authenticated user, redirect to login page
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  // if (isLoading)
  //   return (
  //     <FullPage>
  //       <Spinner />
  //     </FullPage>
  //   );

  //4. If there is a user, render the app

  if (isLoggedIn) return children;
}

export default ProtectedRoute;
