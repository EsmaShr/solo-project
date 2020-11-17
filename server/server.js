const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const postRoutes = require('./routes/posts.js');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

/**
 * connect to mongoDB
 */

const mongoURI =
  'mongodb+srv://Esma-Shr:MikeAns123@cluster0.thwsu.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
// make sure we don't ger warnings in the console
mongoose.set('useFindAndModify', false);
/**
 * handle requests for static files
 */
app.use('/build', express.static(path.resolve(__dirname, '../build')));

/**
 * define route handlers
 */
//
app.use('/posts', postRoutes);

// respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

/**
 * express error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

module.exports = app;
