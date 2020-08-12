const app = require('./config/server')();

// Run
app.listen(3333, () => console.log("Running on port 3333"));
