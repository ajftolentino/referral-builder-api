import { Document } from "mongoose";
import { IAddress } from "./address";

export interface IReferral extends Document {
  id: string | null;
  address?: IAddress;
  email: string;
  givenName: string;
  phone: string;
  surname: string;
}
