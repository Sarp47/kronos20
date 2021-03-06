module.exports = {
  Admins: ["519573066268016641"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ",", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/7TvjqXaWGP", //Support Server Link
  Token: process.env.Token, //Discord Bot Token
  ClientID: process.env.Discord_ClientID, //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret, //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "bagetekmeks", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://kronosbot.tk", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a server to connect :)
  Lavalink: {
    id: "Main",
    host: "lavalink.sudhanplayz.live",
    port: 1234,
    pass: "CodingWithSudhan",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID, //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret, //Spotify Client Secret
  },
};
