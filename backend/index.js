const { qrcodeGenerator } = require("./service/qrcode");
const uuid = require("uuid");
const { validate } = require("./helpers/validate");


// qrcodeGenerator("This is a backend class");
let performAction = (body) => {
  let { workId, fullName } = body; // grab the data

  try {
    validate(workId);
    validate(fullName);
  } catch (err) {
    throw err;
  }

  let generatedUUID = uuid.v4(); //generate uuid
  // database.save(workId, fullName) //save the data
  qrcodeGenerator(generatedUUID, generatedUUID);
  console.log(`http://localhost/qrcode/${generatedUUID}-qrcode.png`);
};

// data we pass from postman
let body = {
  workId: "Topskill0001",
  fullName: "John Doe",
};

performAction(body);
