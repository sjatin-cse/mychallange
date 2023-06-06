import { createContext, useState } from "react";

export const ProductsContext = createContext({});
export function ProductsContextProvider({ children }) {
  const [id, setid] = useState(3);

  return (
    <ProductsContext.Provider value={{ id, setid }}>
      {children}
    </ProductsContext.Provider>
  );
}
