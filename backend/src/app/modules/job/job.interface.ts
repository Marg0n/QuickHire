import { Types } from "mongoose";

export interface IJob{
    _id?: Types.ObjectId;
    title: string;
    company: string;
    location: string;
    category: "admin" | "user";
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}