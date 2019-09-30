var express = require('express');
var ParseDashboard = require('parse-dashboard');

var options = { allowInsecureHTTP: true };
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": process.env.SERVER_URL || `http://localhost:${process.env.PORT || 1337}/parse`,
      "appId": process.env.APP_ID || 'myAppId',
      "masterKey": process.env.MASTER_KEY || '',
      "appName": process.env.APP_NAME || "MyApp",
     // "graphQLServerURL": process.env.GRAPHQL_URL || `http://localhost:${process.env.PORT || 1337}/graphql`,
    }
  ],
  "users": [
    {
      "user": process.env.DASHBOARD_USER || "root",
      "pass": process.env.DASHBOARD_PASSWORD || "toor"
    }
  ]
}, options);

var app = express();

// make the Parse Dashboard available at /dashboard
app.use('/', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040);