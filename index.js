const express = require("express");
const app = express();

const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}....`));

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
