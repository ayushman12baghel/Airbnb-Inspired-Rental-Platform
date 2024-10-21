const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.alternatives().try(
      Joi.string().uri().allow(null, ""), // Allows image as a URL string
      Joi.object({
        // Allows image as an object
        filename: Joi.string().allow(null, ""),
        url: Joi.string().uri().allow(null, ""),
      }).allow(null)
    ),
  }).required(),
});

module.exports.ratingSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
