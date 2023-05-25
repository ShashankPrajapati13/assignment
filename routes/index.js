var express = require('express');
const hotelSchema = require("../model/database.js")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createhotel', async function(req,res,next) {
  var hotelData = req.body;
  var createdHotel = await hotelSchema.create({

    hotelName :hotelData.hotelName,
    bedrooms :hotelData.bedrooms,
    bathroom :hotelData.bathroom,
    description :hotelData.description,
    state :hotelData.state,
    countryCode :hotelData.countryCode,
    rent :hotelData.rent


  })
  res.send(createdHotel)

  console.log(createdHotel)
})


router.get('/minPrice/:plc', async function(req,res,next){
  var countryCode = req.params.plc;
  var hotel = await hotelSchema.find({countryCode:countryCode})
  let result = hotel.filter(e=> e.rent === Math.min(...hotel.map(f=>f.rent) ) );
     console.log(result);
    console.log()
     res.send(result)
})


module.exports = router;
