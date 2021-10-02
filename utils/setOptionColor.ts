import { Method } from "types/method";

const setOptionMethodColor = (method: Method) => {
  switch (method) {
    case "GET":
      return "bg-primary text-white";
    case "POST":
      return "bg-success text-white";
    case "PUT":
      return "bg-warning text-white";
    case "DELETE":
      return "bg-danger text-white";
    case "PATCH":
      return "bg-danger text-white";
    default:
      return;
  }
};

export default setOptionMethodColor;
