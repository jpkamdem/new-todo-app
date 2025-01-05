import { useContext, useEffect, useState } from "react";
import { DataContext } from "./components/DataContext";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    return JSON.parse(
      localStorage.getItem(key) || JSON.stringify(initialValue)
    );
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    return () => localStorage.removeItem(key);
  }, [value, key]);

  return [value, setValue] as const;
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "useThemeContext doit être utilisé à l'intérieur de DataContextProvider"
    );
  }

  return context;
}
