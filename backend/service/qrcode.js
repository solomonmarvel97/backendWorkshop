const QRcode = require("qrcode");

// generating qrcode of items passed in as arguments
exports.qrcodeGenerator = (data, fileName) => {
  QRcode.toFile(
    `public/${fileName}-qrcode.png`,
    data,
    {
      color: {
        dark: "#FFF", // Blue dots
        light: "#0000", // Transparent background
      },
    },
    function (err) {
      if (err) throw err;
      console.log("done");
    }
  );
};
