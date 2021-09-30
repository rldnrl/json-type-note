import { Method } from "./method";

export type ApiItem = {
  id: string;
  requestOrResponse: "Request" | "Response";
  method: Method;
  json: string;
  tsInterface: string;
  typeName: string;
};
