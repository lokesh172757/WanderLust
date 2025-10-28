const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });



router.route("/")
    .get(
        wrapAsync(listingController.index)
    )
    .post(
        isLoggedIn,

        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.newListing)
    );

// new route
router.get("/new",
    isLoggedIn,
    listingController.renderNewForm
);
router.route("/:id")
    .get(
        isLoggedIn,
        wrapAsync(listingController.showListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.deleteListing)
    );


router.route("/:id/edit")
    .get(
        isLoggedIn,
        wrapAsync(listingController.renderEditForm)
    )
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.edit)
    );


module.exports = router;