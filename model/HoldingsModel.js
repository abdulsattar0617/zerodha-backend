const { model } = require("mongoose");
const { holdingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", holdingsSchema);

module.exports = { HoldingsModel };
