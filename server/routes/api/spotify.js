const SpotifyWebApi = require("spotify-web-api-node");

const fetch_spotify_token = (req, res) => {
  const credentials = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  };

  const { code } = req.body;

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi.authorizationCodeGrant(code).then(
    (data) => {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);
      const access_token = data.body["access_token"];
      res.status(200).send({ access_token });
    },
    (err) => {
      console.log("Something went wrong!", err);
      res.status(400).send(err);
    }
  );
};

const search_artists = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const { query } = req.body;

  const credentials = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  };
  const spotifyApi = new SpotifyWebApi(credentials);
  spotifyApi.setAccessToken(token);

  spotifyApi.searchArtists(query).then(
    (data) => {
      res.status(200).send(data.body);
      console.log('Search artists by "Love"', data.body);
    },
    (err) => {
      console.error(err);
      res.status(400).send(err);
    }
  );
};

const me = (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const credentials = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  };
  const spotifyApi = new SpotifyWebApi(credentials);
  spotifyApi.setAccessToken(token);

  spotifyApi.getMe().then(
    (data) => {
      console.log("Some information about the authenticated user", data.body);
      res.status(200).send(data.body);
    },
    (err) => {
      console.log("Something went wrong!", err);
      res.status(400).send(err);
    }
  );
};

const my_playlists = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const credentials = {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  };
  const spotifyApi = new SpotifyWebApi(credentials);
  spotifyApi.setAccessToken(token);

  const user = await spotifyApi.getMe().then(
    (data) => {
      console.log("Some information about the authenticated user", data.body);
      return data.body;
    },
    (err) => {
      console.log("Something went wrong!", err);
      res.status(400).send(err);
    }
  );

  if (user.id) {
    spotifyApi.getUserPlaylists(user.id).then(
      (data) => {
        console.log("Retrieved playlists", data.body);
        res.status(200).send(data.body);
      },
      (err) => {
        console.log("Something went wrong!", err);
        res.status(400).send(err);
      }
    );
  }
};

exports.me = me;
exports.my_playlists = my_playlists;
exports.search_artists = search_artists;
exports.fetch_spotify_token = fetch_spotify_token;
