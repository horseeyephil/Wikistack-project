const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('public'));

const models = require('./models/');
const routes = require('./routes/index');

models.db.sync({force:true}).then(function(){
    app.listen(3000);
})
.catch(console.error.bind(console));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/*',function(req,res,next){
    console.log('Status Code ', res.statusCode);
    next();
});


// app.get('/', function (req, res) {
//     res.render( 'index')
//   });


app.use('/', routes);