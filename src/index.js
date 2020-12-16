const { app, server } = require('./app');

//iniciando el servidor
server.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});