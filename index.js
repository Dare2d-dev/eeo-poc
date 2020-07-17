const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => console.log("Listening on port 3000...."));

/*
var meetup = require('meetup-api')({
	oauth: JSON.parse(process.env.MEETUP_OAUTH) //env variable with oauthtoken
});

meetup.getOAuthRequestToken((error, Url) => {
	response.writeHead(302, {
		'Location': Url
	});
	response.end();
});

meetup.getOAuthAccessToken(oauth_token, () => {
	//API commands goes here
});*/
