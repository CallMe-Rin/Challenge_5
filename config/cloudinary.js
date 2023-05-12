const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "ddjvyqev0",
    api_key: "114429467797648",
    api_secret: "WlNN461a4KbPNNE1O_ssdRgHMfw",
    secure: true,
});

// Edit where picture will be saved in cloudinary (folder)
const config = {
    dir: "Management-cars"
}

module.exports = { cloudinary, config };
