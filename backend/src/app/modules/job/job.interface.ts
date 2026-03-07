import mongoose from "mongoose";

export interface IJob{
    _id?: mongoose.Schema.Types.ObjectId;
    title: string;
    company: string;
    location: string;
    category: "admin" | "user";
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}