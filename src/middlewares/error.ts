import { Request,NextFunction, Response } from "express";
import ErrorHandler from "../utils/utility-class";
import { ControllerType } from "../types/types";

// Error middleware to handle errors
export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  if(err.name==="CastError") err.message = "Invalid Id";

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};


// TryCatch wrapper to handle async errors
export const TryCatch = (func: ControllerType) => (req: Request, res: Response, next: NextFunction) => {
  return Promise.resolve(func(req, res, next)).catch(next);
};
