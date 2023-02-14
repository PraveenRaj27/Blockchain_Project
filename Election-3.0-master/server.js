const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://Magesh16:magesh@cluster0.l4csc.mongodb.net/Election3?retryWrites=true&w=majority";7
const app = express();
app.use(express.json())
app.use(cors());


mongoose
  .connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

const routes = require('./routes/routes');
app.use('/', routes);

app.listen(3000, () => {
    console.log("server started");
})