const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

var app = express(); //tell our app that we're using express
const router = express.Router();

const home = require('./routes/index');
const about = require('./routes/about');
// app.get('/',  (req, res)  => {
//   res.end('hello world')
// });

app.engine('handlebars', exphbs({
    defaultLayout: 'main' // look inseide viewb foler look for main
    //defualt is js html
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', home);
app.use('/about', about)

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
    console.log('Server is running on Port' + app.get('port'));
});
