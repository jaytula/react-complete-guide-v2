import { useEffect, useState } from "react";

const useCounter = (countDown: boolean = false) => {
  const [counter, setCounter] = useState<number>(0);

  const incrementValue = countDown ? -2 : 2;

  useEffect(() => {
    const counterId = setInterval(() => {
      setCounter((prevCount) => prevCount + incrementValue);
    }, 1000);

    return () => clearInterval(counterId);
  }, [incrementValue]);

  return counter;
};

export default useCounter;
