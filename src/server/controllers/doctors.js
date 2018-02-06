const view = require('../models/queries/viewDataDoctors.js');
exports.get = (req,res) => {
  console.log('req.params' , req.params.cityName);
  const cityName = req.params.cityName;
  view.viewDoctorsGaza(cityName,(dataBaseConnectionErorr,data) => {
    console.log(dataBaseConnectionErorr);
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      res.send(data);
    }
  });
};
