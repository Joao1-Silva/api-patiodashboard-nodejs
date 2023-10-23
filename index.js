const express = require('express');
const morgan = require('morgan');

const Routes = require('./src/routes/routes');

const app = express();

const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.use(Routes);

app.listen(port, ()=> {
    console.log(`Server run in ${port}`)
})