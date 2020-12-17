const client = require('./mqtt');
const { conversion, complete } = require('./ascciTobinary');

module.exports = function (io) {
    io.on('connection', socket => {
        console.log('new client');

        //eventos del socket
        socket.on('change password', data => {
            console.log('change password');
            let data1 = '';
            let data2 = '';
            const code = conversion(data);
            const arreglo = complete(code);
            const msg = arreglo.split('_');
            for(let i = 0; i < ((msg.length - 1)/2); i++){
                data1 += msg[i];
                data1 += '_';
            }
            for(let j = ((msg.length - 1)/2); j < (msg.length - 1); j++){
                data2 += msg[j];
                data2 += '_';
            }
            client.publish('password/change/part1', data1);
            client.publish('password/change/part2', data2);
        });

        socket.on('send password', data => {
            console.log('send password');
            client.publish('password/send', data);
        });
    });
}