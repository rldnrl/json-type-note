import { Method } from "./method";

export type ApiItem = {
  id: string;
  method: Method;
  json: string;
  tsInterface: string;
  typeName: string;
};
