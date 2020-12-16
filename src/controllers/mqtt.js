const mqtt = require('mqtt');
const configs = require('../config');

const options = {
  keepalive: 60,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 4000,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: configs.username,
  password: configs.password
}

const client = mqtt.connect(`mqtt://${configs.host}:${configs.port}`, options);

client.on('connect', () => {
  console.log('Broker on line');
});

module.exports = client;