const express = require('express');
const app = express();
const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(express.static('public'));