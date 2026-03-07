import mongoose from "mongoose";

export interface IUser{
    _id?: mongoose.Schema.Types.ObjectId;
    job_id?: mongoose.Schema.Types.ObjectId;
    name: string;
    email: string;
    resume_link: string;
    cover_note: string;
    createdAt?: Date;
    updatedAt?: Date;
}