const dbConnection = require('../database/dbConnection');

const viewDoctorsGaza = (cityName , cb) => {
  console.log('i am in view db', cityName);
  const sql = {
    text: 'SELECT * FROM doctors WHERE location = $1',
    values: [cityName]
  };
  dbConnection.query(sql,(dataBaseConnectionErorr,doctors) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);
    console.log('data doctors is : ', doctors.rows);

    return cb(null, doctors.rows);
  });
};

module.exports = { viewDoctorsGaza };
