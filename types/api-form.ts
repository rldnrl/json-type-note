import { Method } from "./method";

export type ApiForm = {
  url: string;
  method: Method;
  json: string;
  tsInterface: string;
  typeName: string;
};
