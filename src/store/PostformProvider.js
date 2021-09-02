import React, { createContext, useState } from "react";

export const postFormContext = createContext();

export default function PostformProvider({ children }) {
  const [openPostForm, setopenPostForm] = useState(false);
  return (
    <postFormContext.Provider value={{ openPostForm, setopenPostForm }}>
      {children}
    </postFormContext.Provider>
  );
}
