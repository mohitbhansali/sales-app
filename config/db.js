// require mongoose node module
let mongoose = require("mongoose");
let config = require("../config.json");

// Connect to mongoose database
module.exports = mongoose.connect(config["mongodb-url"]);
require("../models");