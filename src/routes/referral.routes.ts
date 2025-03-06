import { Router } from "express";
import {
  createReferral,
  getReferral,
  getReferrals,
  updateReferral,
  deleteReferral,
} from "../controllers";

const router = Router();

router.post("/referrals", createReferral);
router.get("/referrals", getReferrals);
router.get("/referrals/:id", getReferral);
router.put("/referrals/:id", updateReferral);
router.delete("/referrals/:id", deleteReferral);

export default router;
