import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ReferralSchema as Referral } from "../models";
import { Document } from "mongoose";

export const createReferral = async (req: Request, res: Response) => {
  try {
    const referralData = { ...req.body };
    referralData.id = uuidv4();
    const newReferral = new Referral(referralData);
    await newReferral.save();
    res.json({ code: 200, data: newReferral, message: "Success" });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, data: null, message: (err as Error).message });
  }
};

export const getReferrals = async (_req: Request, res: Response) => {
  try {
    const referrals = await Referral.find();
    res.json({
      code: 200,
      data: referrals.map((value) => {
        const copy: Partial<Document> = value.toJSON();
        delete copy._id;
        return copy;
      }),
      message: "Success",
    });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, data: null, message: (err as Error).message });
  }
};

export const getReferral = async (req: Request, res: Response) => {
  try {
    const referral = await Referral.findOne({ id: req.params.id });
    if (!referral) {
      res.status(404).json({ error: "Referral not found" });
      return;
    }
    const data: Partial<Document> = referral.toJSON();
    delete data._id;
    res.json({ code: 200, data, message: "Success" });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, data: null, message: (err as Error).message });
  }
};

export const updateReferral = async (req: Request, res: Response) => {
  try {
    const updatedReferral = await Referral.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, upsert: false }
    );
    if (!updatedReferral) {
      res
        .status(404)
        .json({ code: 404, data: null, message: "Referral not found" });
      return;
    }
    const data: Partial<Document> = updatedReferral.toJSON();
    delete data._id;
    res.json({ code: 200, data, message: "Success" });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, data: null, message: (err as Error).message });
  }
};

export const deleteReferral = async (req: Request, res: Response) => {
  try {
    const deletedReferral = await Referral.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedReferral) {
      res
        .status(404)
        .json({ code: 404, data: null, message: "Referral not found" });
      return;
    }
    res.json({
      code: 200,
      data: true,
      message: "Successfully deleted referral.",
    });
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, data: null, message: (err as Error).message });
  }
};
