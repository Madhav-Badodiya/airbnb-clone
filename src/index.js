import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="1027277089431-l239m4sr306462hik2tpusf6navv9hqi.apps.googleusercontent.com"> 
    <App />
  </GoogleOAuthProvider>
    
  </React.StrictMode>
);
