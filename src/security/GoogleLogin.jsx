import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GoogleLogin({ setToken }) {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      // Send access token to backend
      try {
        const data = {
          access_token: response.access_token,
        };
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`,
          data
        );
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          console.log(result.data.token);
          navigate("/");
        }
      } catch (error) {
        // If there are any error it will show the error message from backend
        // { "message": "Password salah" }
        console.log(error.response.data);
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <i className="fa fa-google fa-lg" onClick={googleLogin}></i>
    </div>
  );
}

export default GoogleLogin;
