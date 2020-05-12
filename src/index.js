const app = require('./config/server')();

// Run
app.listen(3000, () => console.log("Running on port 3000"));
