const axios = require("axios");
const qs = require("qs");

const fetch_spotify_token = (req, res) => {
  const { code } = req.body;

  const clientIDClientSecretEncode = btoa(
    process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
  );

  const data = qs.stringify({
    code: code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    grant_type: "authorization_code",
  });

  const config = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: "Basic " + clientIDClientSecretEncode,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
};

exports.fetch_spotify_token = fetch_spotify_token;
