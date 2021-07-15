const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/todo";

// Ajustei o erro de depreciacao
// https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
