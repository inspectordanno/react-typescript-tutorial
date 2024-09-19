import { useEffect } from "react";

type Timeout = () => NodeJS.Timeout

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Done!");
    }, timerMs)
    return () => {
      clearTimeout(timeout)
    }
  });
}
