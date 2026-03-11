import type { IApplicationUser } from "./application.interface.js";
import { Application } from "./application.model.js";


const createApplicationIntoDB = async (payload: IApplicationUser) => {
  const result = await Application.create(payload);
  return result;
};

export const applicationServices = {
  createApplicationIntoDB,
};
