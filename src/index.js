const app = require('express')();

app.get('/', (_, res) => {
  res.send('Hello from App Engine, this app has automatically been deployed with GitHub!');
});

// The server listen to the App Engine-specified port process.env.PORT
// or on 8080 if run on your local machine.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});