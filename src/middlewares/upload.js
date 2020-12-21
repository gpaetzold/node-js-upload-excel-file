const multer = require("multer");

const excelFilter = (req, file, callback) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml")
  ) {
    callback(null, true);
  } else {
    callback("Please upload only excel file", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + "/resources/static/assets/uploads");
  },
  filename: (req, file, callback) => {
    console.log(file.originalname);
    callback(null, `${Date.now()}-gerald-${file.originalname}`);
  }
});

var uploadFile = multer({
  storage: storage,
  fileFilter: excelFilter
});
module.exports = uploadFile;
