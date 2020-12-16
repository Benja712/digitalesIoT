const dotenv = require('dotenv');
dotenv.config();

const mqttConfigs = {
    username: process.env.BROKER_USER,
    password: process.env.BROKER_PASSWORD,
    host: process.env.HOST_BROKER,
    port: process.env.PORT_BROKER
}

module.exports = mqttConfigs;