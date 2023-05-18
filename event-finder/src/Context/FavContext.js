import { createContext, useEffect, useState } from "react";

const FavContext = createContext();

export function FavProvider({ children }) {
  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <FavContext.Provider value={{ items, setItems }}>
      {children}
    </FavContext.Provider>
  );
}

export default FavContext;
