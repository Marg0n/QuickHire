import { Schema, model } from 'mongoose';
import type { IJob } from './job.interface.js';

const jobSchema = new Schema<IJob>(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    category: {
      type: String,
      enum: {
        values: ['Full Time', 'Part Time', 'Contractual'],
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//* relation to job
jobSchema.virtual('applications', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'job_id',
});

export const Job = model<IJob>('Job', jobSchema);
