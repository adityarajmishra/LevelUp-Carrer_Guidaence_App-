import express from "express";

const router = express.Router();
import {
  deleteCounsellor,
  getCounsellorById,
  getCounsellors,
  updateCounsellor,
  createCounsellor,
} from "../controllers/counsellorControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getCounsellors).post(protect, admin, createCounsellor);
router
  .route("/:id")
  .get(getCounsellorById)
  .delete(protect, admin, deleteCounsellor)
  .put(protect, admin, updateCounsellor);

export default router;
