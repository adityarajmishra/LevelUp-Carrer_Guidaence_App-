import express from "express";
const router = express.Router();
import {
  addSession,
  getSessionById,
  getMySessions,
  getSessions,
  updateOrderToConfirm,
  updateOrderToDelivered,
} from "../controllers/sessionController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addSession).get(protect, admin, getSessions);

router.route("/myorders").get(protect, getMySessions);
router.route("/:id").get(protect, getSessionById);
router.route("/:id/confirm").put(protect, admin, updateOrderToConfirm);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
