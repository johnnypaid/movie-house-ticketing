const express = require('express');
const cors = require('cors');

const seats = require('./routes/seats');
const movies = require('./routes/movies');

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(__dirname + '/frontend/dist/frontend/'));

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// routes
app.use('/api/reserve-seat', seats);
app.use('/api/movies', movies);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname +' /frontend/dist/frontend/index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});