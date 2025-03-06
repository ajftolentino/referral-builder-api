import { Schema } from "mongoose";
import { IAddress } from "../types";

const AddressSchema = new Schema<IAddress>({
  building: { type: String },
  city: { type: String },
  street: { type: String },
  country: { type: String },
  stateOrProvince: { type: String },
  zipCode: { type: String },
});

export default AddressSchema;
