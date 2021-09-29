import { Method } from "./method";

export type ApiForm = {
  method: Method;
  json: string;
  tsInterface: string;
  typeName: string;
};
