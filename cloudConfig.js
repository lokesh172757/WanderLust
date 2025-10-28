const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Validate Cloudinary configuration
const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.CLOUD_API_KEY;
const apiSecret = process.env.CLOUD_API_SECRET;

if (!cloudName || cloudName === "your_cloud_name" || 
    !apiKey || apiKey === "your_api_key" || 
    !apiSecret || apiSecret === "your_api_secret") {
    console.warn("⚠️  Cloudinary configuration is missing!");
    console.warn("Image uploads will not work until you configure Cloudinary.");
    console.warn("Get your credentials from: https://cloudinary.com/console");
    console.warn("Continuing without Cloudinary...");
    
    // Create a dummy storage that will cause uploads to fail gracefully
    const multer = require("multer");
    const storage = multer.memoryStorage();
    module.exports = { cloudinary: null, storage };
    return;
}

// Configure Cloudinary
cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
});

// Create Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_DEV",
        allowedFormats: ["jpeg", "png", "jpg"],
        transformation: [{ width: 800, height: 600, crop: "limit" }]
    }
});

console.log("Cloudinary configured successfully");

module.exports = {
    cloudinary,
    storage
};