import mongoose, { Document, Schema } from "mongoose";
import { IReferral } from "../types";
import { AddressSchema } from "../models";

const ReferralSchema = new Schema<IReferral>(
  {
    id: { type: String, unique: true },
    address: AddressSchema,
    email: { type: String, required: true, unique: true },
    givenName: { type: String, required: true },
    phone: { type: String, required: true },
    surname: { type: String, required: true },
  },
  { collection: "referrals" }
);

const Referral = mongoose.model<IReferral>("Referral", ReferralSchema);
export default Referral;
