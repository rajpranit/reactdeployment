import ReactDOM from "react-dom/client";
import { Wrapper } from "./preview";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {" "}
    <Wrapper>
      {" "}
      <App />
    </Wrapper>{" "}
  </BrowserRouter>
);
