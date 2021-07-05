import { useEffect, useState } from "react";

const useCounter = (increment: number = 1) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const counterId = setInterval(() => {
      setCounter((prevCount) => prevCount + increment);
    }, 1000);

    return () => clearInterval(counterId);
  }, [increment]);

  return counter;
};

export default useCounter;
