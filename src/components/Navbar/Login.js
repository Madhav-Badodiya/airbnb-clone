import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="login-form">
      <Button
        sx={{
          color: "black",
          textTransform: "capitalize",
          ml: "-10px",
          width: "350px",
          justifyContent: "start",
        }}
        onClick={login}
        variant="text"
        size="large"
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
