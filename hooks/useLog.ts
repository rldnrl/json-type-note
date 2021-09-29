import { useEffect } from "react";

function isUndefined(value?: any): value is undefined {
  return typeof value === "undefined";
}

const useLog = (detectedValue: any, deps?: any[]) => {
  let dependencyList: any[] = [];
  if (!isUndefined(deps)) {
    dependencyList = [...deps];
  }
  useEffect(() => {
    console.log(detectedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detectedValue, ...dependencyList]);
};

export default useLog;
