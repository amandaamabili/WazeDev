const express = require('express');
const mongoose= require('mongoose');
const routes = require ('./routes')


const app= express();

mongoose.connect('mongodb+srv://AMANDA:aABH1234@cluster0-objfj.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true,  }  );

app.use(express.json());
app.use(routes);


app.listen(3333);