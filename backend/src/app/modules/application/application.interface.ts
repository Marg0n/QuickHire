import { Types } from "mongoose";

export interface IApplicationUser{
    _id?: Types.ObjectId;
    job_id?: Types.ObjectId;
    name: string;
    email: string;
    resume_link: string;
    cover_note: string;
    createdAt?: Date;
    updatedAt?: Date;
}