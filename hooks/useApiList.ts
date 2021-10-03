import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ApiItem } from "types/api-item";
import { getLocalStorageFrom } from "utils/local-storage";
import { isNull } from "utils/type-guard";

type UseApiList = () => [ApiItem[], Dispatch<SetStateAction<ApiItem[]>>];

const useApiList: UseApiList = () => {
  const [apiList, setApiList] = useState<ApiItem[]>([]);

  useEffect(() => {
    const apiListFromLocalStorage = getLocalStorageFrom('api_list');

    if (!isNull(apiListFromLocalStorage)) {
      setApiList(JSON.parse(apiListFromLocalStorage));
    }
  }, []);

  return [apiList, setApiList];
};

export default useApiList;
