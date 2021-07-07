import { useState } from "react";
import { ITask } from "../components/NewTask/NewTask";

const useHttp = (requestConfig: {
  url: string;
  method: string;
  headers: any;
  body: any;
}, applyData: (data: any) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
            
      const data = await response.json();
      applyData(data);

    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
