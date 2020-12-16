const { Router } = require('express');
const hbs = require('hbs');
const path = require('path');
const router = Router();

//partials hbs
hbs.registerPartials(__dirname + '/../../views/partials', function (err) { });

router.get('/', (req, res) => {
    res.render(path.basename('index.html'))
});

router.get('/change', (req, res) => {
    res.render(path.basename('change.html'));
});

router.get('/send', (req, res) => {
    res.render(path.basename('send.html'));
});

router.get('/diagrams', (req, res) => {
    res.render(path.basename('diagramas.html'));
});

module.exports = router;