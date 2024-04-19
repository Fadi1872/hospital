import { createContext, useContext, useState } from "react";

const IDContext = createContext();

export const IDProvider = ({ children }) => {
  const [id, setId] = useState({
    user: -1,
    user_name: "",
    visit: -1
  });

  return (
    <IDContext.Provider value={{id, setId}}>{children}</IDContext.Provider>
  );
};

export const useID = () => useContext(IDContext)