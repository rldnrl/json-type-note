import { Method } from "./method";

export type ApiForm = {
  requestOrResponse: "Request" | "Response";
  method: Method;
  json: string;
  tsInterface: string;
  typeName: string;
};
