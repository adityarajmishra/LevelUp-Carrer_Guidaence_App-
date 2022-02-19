import asyncHandler from "express-async-handler";
import Session from "../models/counsellingSessionModel.js";

// @desc Create new Session
// @route POST /api/order
// @acess Private
const addSession = asyncHandler(async (req, res) => {
  const { sessionDetails, sessionItems } = req.body;

  if (sessionDetails && sessionDetails.length === 0) {
    res.status(400);
    throw new Error("No session exists");
    return;
  } else {
    const session = new Session({
      sessionItems,
      user: req.user._id,
      sessionDetails,
    });
    const createdSession = await session.save();
    res.status(201).json(createdSession);
  }
});

// @desc Get session by ID
// @route Get /api/order/:id
// @acess Private
const getSessionById = asyncHandler(async (req, res) => {
  const order = await Session.findById(req.params.id).populate(
    "user",
    "name email",
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found!");
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMySessions = asyncHandler(async (req, res) => {
  const orders = await Session.find({ user: req.user._id });
  res.json(orders);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getSessions = asyncHandler(async (req, res) => {
  const orders = await Session.find({}).populate("user", "id name");
  res.json(orders);
});

// @desc    Update order to confirm
// @route   GET /api/orders/:id/confirm
// @access  Private/Admin
const updateOrderToConfirm = asyncHandler(async (req, res) => {
  const order = await Session.findById(req.params.id);

  if (order) {
    order.isConfirm = true;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Session.findById(req.params.id);

  if (order) {
    order.sessionDone = true;

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export {
  addSession,
  getSessionById,
  getMySessions,
  getSessions,
  updateOrderToConfirm,
  updateOrderToDelivered,
};
