import React from "react";
import "../src/index.css";

export const Wrapper: React.FC = ({ children }) => (
  <>
    <MyContext.Provider>
      <div className="wrapped">{children}</div>
    </MyContext.Provider>
  </>
);
