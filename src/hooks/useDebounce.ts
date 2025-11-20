// src/hooks/useDebounce.ts

import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number =400): T {
  const [deboundcedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return deboundcedValue;
}
