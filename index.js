var server = require('cre-nodejs-server');

var handlers = [];

handlers = server.addDefaultHandlers(  
  handlers,                     // only defaults
  '/SolarSystem/Client/html/solarSystem.html' // Start page
);

server.server.start(
  require('path').resolve(__dirname), // root 
  handlers);