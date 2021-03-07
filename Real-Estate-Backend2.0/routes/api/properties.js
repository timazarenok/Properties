const express = require("express");
const router = express.Router();


// Load Property model
const { Property } = require("../../models");

// @route POST api/add
// @description add/save property
// @access Public
router.post("/add", (req, res) => {
  Property.create({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    price: req.body.price,
    square: req.body.square,
    number_of_bathrooms: req.body.number_of_bathrooms,
    number_of_bedrooms: req.body.number_of_bedrooms,
    number_of_car_parking: req.body.number_of_car_parking,
  })
    .then((property) => res.json({ msg: "Property added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this property" })
    );
});

// @route GET api/inquiries
// @description Get all inquiries
// @access Public
router.get("/", (req, res) => {
  Property.findAll()
    .then((properties) => res.json(properties))
    .catch((err) =>
      res.status(404).json({ noinquiriesfound: "No properties found" })
    );
});

// @route DELETE api/property/:id
// @description Delete property by id
// @access Public
router.delete("/:id", (req, res) => {
  Property.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((property) => res.json({ mgs: "Property entry deleted successfully", properties: Property.findAll() }))
    .catch((err) => res.status(404).json({ error: "No such property" }));
});

// @route PUT api/property/:id
// @description Update property
// @access Public
router.put("/property/:id", (req, res) => {
  Property.findByIdAndUpdate(req.params.id, req.body)
    .then((property) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/property/:id
// @description Get single property by id
// @access Public
router.get("/property/:id", (req, res) => {
  Property.findByPk(req.params.id)
    .then((property) => res.json(property))
    .catch((err) =>
      res.status(404).json({ noinqueryfound: "No property found" })
    );
});

module.exports = router;
