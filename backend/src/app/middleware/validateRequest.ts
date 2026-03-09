import type { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync.js";
import type { z } from "zod";


const validateRequest = (schema: z.ZodTypeAny) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    
    const parsedData = await schema.parseAsync({
      body: req.body,
      cookies: req.cookies,
    });
    // console.log('req.body:', req.body);
    // console.log('parsedData:', req.parsedData);

    next();
  });
};

export default validateRequest;