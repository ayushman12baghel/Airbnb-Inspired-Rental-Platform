const Listing = require("../models/listing");
const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'opencage', // You can use another provider if you wish
  httpAdapter: 'https',
  apiKey: process.env.MAP_TOKEN, // Replace with your actual API key
  formatter: null, // Format of the result
};

const geocoder = NodeGeocoder(options);

module.exports.index = async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings/index.ejs", { listings });
};


module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exists");
    res.redirect("/listings");
  }
  console.log(listing);
  console.log(listing.geometry.coordinates); // Check the format

  res.render("listings/show.ejs", { listing });
};

// module.exports.createListing = async (req, res, next) => {
//   let url = req.file.path;
//   let filename = req.file.filename;
//   const newListing = new Listing(req.body.listing);
//   newListing.owner = req.user._id;
//   newListing.image = { url, filename };
//   await newListing.save();
//   req.flash("success", "New Listing Created");
//   res.redirect("/listings");
// };

module.exports.createListing = async (req, res, next) => {
  const url = req.file.path;
  const filename = req.file.filename;

  // Create a new listing from the request body
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  try {
    // Get coordinates based on the location
    const geoData = await geocoder.geocode(newListing.location);
    if (!geoData.length) {
      req.flash('error', 'Location not found');
      return res.redirect('/listings/new'); // Redirect back to the form if location is not found
    }

    // Store the coordinates in the geometry field
    newListing.geometry = {
      type: 'Point',
      coordinates: [geoData[0].longitude, geoData[0].latitude],
    };

    // Save the new listing
    await newListing.save();
    req.flash('success', 'New Listing Created');
    res.redirect('/listings');
  } catch (error) {
    console.error(error);
    req.flash('error', 'An error occurred while creating the listing');
    res.redirect('/listings/new'); // Redirect back to the form on error
  }
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exists");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};


module.exports.filter = async (req, res, next) => {
  let { id } = req.params;
  let listings = await Listing.find({ category: { $all: [id] } });
  console.log(listings);
  if (listings.length != 0) {
    res.locals.success = `Listings Find by ${id}`;
    res.render("listings/index.ejs", { listings });
  } else {
    req.flash("error", "Listings is not here !!!");
    res.redirect("/listings");
  }
};

//search

module.exports.searchListings = async (req, res) => {
  const query = req.query.q; // Capture search query
  console.log("Search query:", query); // Debugging line to see the query in the console

  if (!query || query.trim() === "") {
    req.flash("error", "Please enter a search term!");
    return res.redirect("/listings");
  }

  // Perform search logic here...
  const listings = await Listing.find({
    $or: [
      { title: new RegExp(query, 'i') },        
      { description: new RegExp(query, 'i') },
      { location: new RegExp(query, 'i') }
    ]
  });

  if (listings.length > 0) {
    res.render("listings/index", { listings });
  } else {
    req.flash("error", "No listings found matching your search.");
    res.redirect("/listings");
  }
};