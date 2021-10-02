import { useState, useEffect } from "react";

const useIsCopied = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return { isCopied, setIsCopied };
};

export default useIsCopied;
