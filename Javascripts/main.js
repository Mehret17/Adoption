const data = require('./dataGateKeeper');
const events = require ('./events');

data.initializer();
events.addEvents();
