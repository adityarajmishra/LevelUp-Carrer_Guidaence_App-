import asyncHandler from "express-async-handler";
import Counsellor from "../models/counsellorModel.js";

//@desc Fetch all counsellors
//@route GET /api/counsellors
//@acess Public

const getCounsellors = asyncHandler(async (req, res) => {
  const counsellors = await Counsellor.find({});
  // res.status(401);
  // throw new Error("Not Authorized");
  res.json(counsellors);
});

//@desc Fetch single counsellors
//@route GET /api/counsellors/:id
//@acess Public

const getCounsellorById = asyncHandler(async (req, res) => {
  const counsellor = await Counsellor.findById(req.params.id);

  if (counsellor) {
    res.json(counsellor);
  } else {
    res.status(404);
    throw new Error("Not Found");
  }
});

//@desc Deelete counsellors
//@route GET /api/counsellors/:id
//@acess Private/Admin

const deleteCounsellor = asyncHandler(async (req, res) => {
  const counsellor = await Counsellor.findById(req.params.id);

  if (counsellor) {
    await counsellor.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a counsellor
// @route   POST /api/counsellors
// @access  Private/Admin
const createCounsellor = asyncHandler(async (req, res) => {
  const counsellor = new Counsellor({
    name: "Sample name",
    googleMeet: "testlink.co",
    user: req.user._id,
    image: "/images/sample.jpg",
    availability: "available",
    working: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday",
    workingHrs: "10:00 AM - 7:00 PM",
    category: "Sample category",

    numReviews: 0,
    description: "Sample description",
  });

  const createdCounsellor = await counsellor.save();
  res.status(201).json(createdCounsellor);
});

// @desc    Update a counsellor
// @route   PUT /api/counsellors/:id
// @access  Private/Admin
const updateCounsellor = asyncHandler(async (req, res) => {
  const {
    name,
    googleMeet,
    description,
    image,
    availability,
    category,
    working,
    workingHrs,
  } = req.body;

  const counsellor = await Counsellor.findById(req.params.id);

  if (counsellor) {
    counsellor.name = name;
    counsellor.googleMeet = googleMeet;
    counsellor.description = description;
    counsellor.image = image;
    counsellor.availability = availability;
    counsellor.category = category;
    counsellor.working = working;
    counsellor.workingHrs = workingHrs;

    const updatedCounsellor = await counsellor.save();
    res.json(updatedCounsellor);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getCounsellorById,
  getCounsellors,
  deleteCounsellor,
  createCounsellor,
  updateCounsellor,
};
