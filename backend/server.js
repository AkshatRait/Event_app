const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE //