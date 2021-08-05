import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import axios, { AxiosRequestConfig } from "axios";

const SpotifyAuth = ({ location }: { location: Record<any, string> }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");
    const data = JSON.stringify({ code: code });
    const config: AxiosRequestConfig = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_API + "spotify_token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        localStorage.setItem("spotify_token", response.data.access_token);
        setToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location.search]);

  if (!token) {
    return <div>Receiving token... </div>;
  } else {
    return <Redirect to="/" />;
  }
};

export default SpotifyAuth;
