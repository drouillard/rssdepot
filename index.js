const JsonServer = require('json-server');
const React = require('react');
const Application = require('./client/app');
const server = JsonServer.create();
const router = JsonServer.router('./db.json');
const port = process.env.PORT || 3000;
const Feeds = require('./db.json').feeds;

server.use(JsonServer.defaults());


server.get('/', (req, res) => {
    const model = {
        counter1: 0,
        feeds: Feeds
    };
    res.send(`<!DOCTYPE html>
    <html>
<head>
<title>RSS Depot</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.2/css/materialize.min.css">
<link rel="stylesheet" href="/static/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

    <main id="app">
        ${React.renderToString(<Application {...model} />)}
    </main>
    <footer class='container'>
        <p>Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.</p>
    </footer>
    <script type="text/javascript">
window.INITIAL_MODEL = ${JSON.stringify(model)};
</script>
<script type="text/javascript" src="/static/bundle.js"></script>
</body>
    </html>`);
});


server.get('/static/bundle.js', function (req, res) {
    res.sendFile('bundle.js', {root: __dirname});
});

server.get('/static/style.css', function (req, res) {
    res.sendFile('style.css', {root: __dirname + '/public'});
});


server.get('/status', (req, res) => {
    res.json({status: 'OK'});
});

server.use(router);

server.listen(port);
