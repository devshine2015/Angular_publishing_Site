var google = require("googleapis");
var apiKey = "AIzaSyDi-dsnULGRRskLrK2BoIMujvw7dpKKLbY";
// var urlshortener = google.urlshortener({ version: 'v1', auth: apiKey });

// var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(
    "366518896581-6tm0r6frpjnkvkg1jcsce44rf9ftrg0t.apps.googleusercontent.com",
    "vRoY4GzGQWqQZ6UWhv4t75v9",
    "http://domain.com/ads/callback"
);

// set auth as a global default
google.options({
  auth: oauth2Client
});

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string 
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
});

// retrieve a person's profile given a userId:
// plus.people.get({
//     auth: API_KEY,
//     userId: '+google'
//   }, function (err, user) {
//     console.log('Result: ' + (err ? err.message : user.displayName));
//   });