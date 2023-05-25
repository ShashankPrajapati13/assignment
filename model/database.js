var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/trivago")

const hotelSchema = new mongoose.Schema({

    hotelName :String,
    bedrooms :Number,
    bathroom :Number,
    description :String,
    state :String,
    countryCode :String,
    rent :Number

})


module.exports = mongoose.model('hotels', hotelSchema); 