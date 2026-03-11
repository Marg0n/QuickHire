import { Types } from 'mongoose';

export interface IJob {
  _id?: Types.ObjectId;
  title: string;
  company: string;
  location: string;
  category: 'Full Time' | 'Part Time' | 'Contractual';
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}
