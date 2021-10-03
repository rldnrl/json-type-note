import { useState, useEffect, ChangeEvent } from "react";
import { quicktypeJSON } from "utils/quick-type";

const jsonToTypeScript = async (json: string, typeName: string) => {
  const { lines: tsPerson } = await quicktypeJSON("ts", typeName, json);
  return tsPerson.join("\n");
};

const useJsonToTs = (
  typeName: string,
  defaultJson = {},
  defaultTsInterface = ""
) => {
  const [json, setJson] = useState(JSON.stringify(defaultJson, null, 2));
  const [tsInterface, setTsInterface] = useState(defaultTsInterface);

  useEffect(() => {
    jsonToTypeScript(json, typeName)
      .then((res) => setTsInterface(res))
      .catch((e) => {});
  }, [json, typeName]);

  const resetJson = () => {
    setJson(JSON.stringify({}, null, 2));
  };

  return {
    json,
    setJson,
    tsInterface,
    resetJson,
  };
};

export default useJsonToTs;
