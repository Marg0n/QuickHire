import { Schema, model } from "mongoose";
import type { IApplicationUser } from "./application.interface.js";

const applicationSchema = new Schema<IApplicationUser>(
  {
    job_id: {
      type: Schema.Types.ObjectId,
      ref: 'Job', 
      required: [true, 'Job ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Applicant name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    resume_link: {
      type: String,
      required: [true, 'Resume link is required'],
    },
    cover_note: {
      type: String,
      required: [true, 'Cover note is required'],
    },
  },
  {
    timestamps: true, 
    versionKey: false,
  }
);

export const Application = model<IApplicationUser>("Application", applicationSchema);
