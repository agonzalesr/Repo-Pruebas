const express = require('express');
const app = express();
const morgan = require('morgan');

//config
app.set('port', 3000);
app.set('json spaces',2);

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index.js'));
app.use('/api/usuarios',require('./routes/usuario'))
app.use('/api/albums',require('./routes/albums'))

//server start
app.listen(app.get('port'), function(){
    console.log(`Server on Port ${app.get('port')}`)
});

