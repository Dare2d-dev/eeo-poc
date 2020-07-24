const endpoints = require('./endpoints.json');
const fetch = require('node-fetch');

const meetupConsumer = {
  "access_token": "edce51d5b18371df5c900482682b52d3",
  "refresh_token": "046d57e0d9f218e1de34670645b5cb80", 
};
const secureURL = "https://secure.meetup.com/oauth2";
const urls = {
  authorize_token: `${secureURL}/authorize?client_id=${meetupConsumer.key}&response_type=token&redirect_uri=https://eeoapp.herokuapp.com/Oauth2`,
  authorize_anon : `${secureURL}/authorize?client_id=${meetupConsumer.key}&response_type=anonymous_code&redirect_uri=https://eeoapp.herokuapp.com/`,
  access: `${secureURL}/access?client_id=${meetupConsumer.key}&client_secret=${meetupConsumer.secret}&grant_type=anonymous_code&redirect_uri=https://eeoapp.herokuapp.com/&code=`
};

const express = require('express');
const app = express();

app.listen()

app.listen(8080, () => {
  console.log("port 8080");
})

app.get('/',(req,res)=>{



  const headers = new fetch.Headers(
    {
      'Authorization':`Bearer ${meetupConsumer.access_token}`,  
      "content-type": "application/json", 
    });

    const params = new URLSearchParams({
      fields: 'answers',
      sign: true,
      'photo-host': 'public',
      page: 20
    });

  const request = fetch('https://api.meetup.com/EndavaArgentinaRosario/events/264083608/attendance?fields=answers&&sign=true&photo-host=public&page=20',
  {
    method: 'GET',
    headers: headers,
    //params: params
  })
  .then(res => res.text())
  .then(body => {res.send(body)})
  .catch((error) => {
    console.log(error);
  })

    

});

app.get('/oauth2',(req,res)=>{
  //code en la url

});



//console.log(endpoints);



/*

https://secure.meetup.com/oauth2/authorize
  ?client_id=lv1rnttre7ec655ugj0kn6abav
  &redirect_uri=https://eeoapp.herokuapp.com/
  &response_type=anonymous_code
>>>>
https://eeoapp.herokuapp.com/oauth2/code=bb7cde692683b63a2ac76d833b4d3467

https://secure.meetup.com/oauth2/access?
  client_id=lv1rnttre7ec655ugj0kn6abav
  &client_secret=b6hseeqq1tljtpaumq8iv1t0th
  &grant_type=anonymous_code
  &redirect_uri=https://eeoapp.herokuapp.com/
  &code=bb7cde692683b63a2ac76d833b4d3467
  
  {
    "access_token": "508103659217c612585f43b9a7d8c54a",
    "refresh_token": "3474edde617e78c0f692eb410318f899",
    "member": {
        "country": "ar",
        "city": "Rosario",
        "name": "prereg_member_6993330320513",
        "lon": -60.663597,
        "id": 313056777,
        "state": "21",
        "lat": -32.9541
    },
    "token_type": "bearer",
    "expires_in": 3600
}


https://api.meetup.com/EndavaArgentinaRosario/events/271860470/attendance/#list


 https://www.meetup.com/es/meetup_api/docs/:urlname/events/:id/attendance/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F%3Aid%2Fattendance%2F#list

 */
 